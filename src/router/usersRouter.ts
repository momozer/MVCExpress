import { UserController } from './../controller/userController';
import express from "express";
import { UserModel } from '../model/userModel';

const router = express.Router();
const model = new UserModel();
const controller = new UserController(model);

router.get("/", controller.getUsers)
router.get("/delete/:id", controller.deleteUser)
router.get("/detailUser/:id", controller.detailUser )
router.post("/addUser", controller.addUser)
router.get("/addUserPage", controller.addUserPage)
router.post("/detailUser/:id/modifUser", controller.modifUser)


export default router