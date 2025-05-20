import { Router } from "express";
import { createUserController, getUserByIdController, getUserController, loginUserController } from "../controllers/userController";
const userRoutes: Router = Router();

userRoutes.get('/', getUserController)

userRoutes.get('/:id', getUserByIdController)

userRoutes.post("/register", createUserController)

userRoutes.post("/login", loginUserController)

export default userRoutes
