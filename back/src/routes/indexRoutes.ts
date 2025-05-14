import { Router } from "express";
import userRoutes from "./userRoutes";
import turnsRoutes from "./turnsRoutes";

const router: Router = Router()

router.use("/users", userRoutes);
router.use("/appointments", turnsRoutes)


export default router