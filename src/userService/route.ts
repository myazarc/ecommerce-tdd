import { Router } from "express";
import { UserController } from "./core/application/Controller/UserController";
const userController = new UserController();

const router = Router();

router.post("/register", userController.createUser);

export default router;
