import express from "express";
import http from "http";
import cors from "cors";
import routes from "./routes";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

export { app, server };
