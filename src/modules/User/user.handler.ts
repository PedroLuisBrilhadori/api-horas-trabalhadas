import { Request, Response } from "express";
import userController from "./user.controller";

class UserHandler {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    try {
      const user = await userController.create({ name, email, password });
      res.status(201).json({ success: true, user });
    } catch (error) {
      res.send(400).json({ success: false, error });
    }
  }
}

export default new UserHandler();
