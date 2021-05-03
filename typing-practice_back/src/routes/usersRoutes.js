import UserController from "../controllers/userController";

export async function getAll(req, res) {
  const users = await user.findAll();
  res.status(200).json(users);
}

export const usersRoutes = (app) => {
  app.get("/api/users", UserController.getAllUsers);
  app.get("/api/users/:id", UserController.getUserById);
  app.post("/api/users", UserController.createUser);
  app.put("/api/users/:id");
  app.delete("/api/users/:id");
};
