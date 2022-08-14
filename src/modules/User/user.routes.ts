import { Router } from "express";
import userHandler from "./user.handler";
import UserValidator from "./user.validator";

export default () => {
  const routes = Router();

  routes.post(`/`, UserValidator.create, userHandler.create);

  return routes;
};
