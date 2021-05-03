const bcrypt = require('bcrypt');

export const generateUserHash = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};
