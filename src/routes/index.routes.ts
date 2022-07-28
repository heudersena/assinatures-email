import express from "express";
import { AssinatureController } from "../controllers/assinature.controler";
import { ViewsController } from "../controllers/views.controller";

const router = express();

router.post("/assinatures-email/create", new AssinatureController().create);

router.get("/", new ViewsController().create);
router.get("/list", new ViewsController().list);

export { router };
