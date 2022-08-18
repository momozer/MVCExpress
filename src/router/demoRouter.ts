import { DemoController } from './../controller/demoController';
import express from "express";
import { DemoModel } from '../model/demoModele';

// On définit le routeur de express:
const router = express.Router();
const model = new DemoModel();
const controller = new DemoController(model);

router.get("/", controller.getString)
router.post("/", controller.postString)
router.get("/page", controller.getPage)


export default router;