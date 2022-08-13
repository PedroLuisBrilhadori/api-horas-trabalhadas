import dotenv from "dotenv";
import { app } from "./app";

import StringColors from "@utils/string-colors";

dotenv.config({
  path: process.env.NODE_ENV === "production" ? "/configs/.env" : "/configs/dev.env",
});

const start = () => {
  try {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `${StringColors.green}[APP]${StringColors.null} | O Servidor foi iniciado: ${StringColors.yellow}http://localhost:${process.env.PORT || 3000}${StringColors.null}`
      );
    });
  } catch (error) {
    throw new Error(`[Erro] | O servidor não foi iniciado. \nCódigo do erro: \n${error}`);
  }
};

start();
