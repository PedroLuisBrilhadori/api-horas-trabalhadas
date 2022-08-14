import { hash } from "bcrypt";
import { Request, Response } from "express";
import userController from "./user.controller";

class UserHandler {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const password_hash = await hash(password, 10);
      const user = await userController.create({ name, email, password: password_hash });
      res.status(201).json({ success: true, user });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new UserHandler();
