import { UserRepository } from "src/repositores";
import User from "./user.model";

type CreateUser = {
  name: string;
  email: string;
  password: string;
};

class UserController {
  async create({ name, email, password }: CreateUser): Promise<User> {
    const repository = await UserRepository();
    const user = repository.create({ name, email, password });
    await repository.save(user);

    user.password = null;

    return user;
  }
}

export default new UserController();
