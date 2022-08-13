import "reflect-metadata";
import dotenv from "dotenv";
import { app } from "./app";

import { StringColors, StringUtils } from "@utils/string";
import AppDataSource from "@services/database";

dotenv.config();

const start = async () => {
  try {
    await AppDataSource.initialize();

    console.log(`${StringUtils.app} | Banco de dados conectado!`);

    await AppDataSource.synchronize();

    console.log(`${StringUtils.app} | Banco de dados sincronizado!`);

    app.listen(process.env.PORT || 3000, () => {
      console.log(`${StringUtils.app} | O Servidor foi iniciado: ${StringColors.yellow}http://localhost:${process.env.PORT || 3000}${StringColors.null}`);
    });
  } catch (error) {
    throw new Error(`[Erro] | O servidor não foi iniciado. \nCódigo do erro: \n${error}`);
  }
};

start();
