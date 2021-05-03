import { models } from '../models/index';
import { generateUserHash } from '../utils';
const { user } = models;

class UserController {
  public static async getAllUsers(req, res) {
    const users = await user.findAll();
    res.status(200).json(users);
  }

  public static async getUserById(req, res) {}

  public static async createUser(req, res) {
    const {
      firstName: firstname,
      lastName: lastname,
      password,
      confirmPassword,
      email,
      allowExtraEmails: allowextraemails,
    } = req.body;

    if (password !== confirmPassword)
      res.json({ message: 'Password and confirmation do not match' });

    const token = await generateUserHash(password);

    user
      .create({
        firstname,
        lastname,
        allowextraemails,
        email,
        token,
      })
      .then((response) => {
        res.status(200).json({ response });
      })
      .catch((err) => {
        res.status(500).json({ message: err });
      });
  }

  public static async checkUser(req, res) {
    const { token } = req.body;
  }
}

export default UserController;
