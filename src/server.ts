import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { resolve } from "node:path";
import cors from "cors";
import { router } from "./routes/index.routes";
import expressejslayouts from "express-ejs-layouts";

const app = express();


const dirPath =
    process.env.NODE_ENV == "dev"
        ? resolve(__dirname, "..", "public")
        : resolve(__dirname, "..", "public");


app.use("/static", express.static(dirPath));

app.use(express.json());
app.use(cors());
app.use(router);

app.set("view engine", "html");
app.set("views", resolve(__dirname, "views"));
app.use(expressejslayouts);

app.listen(80, () => console.log("server running http://localhost:3333"));
