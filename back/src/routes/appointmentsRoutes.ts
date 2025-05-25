import { Router } from "express";
import { cancelAppointmentController, createAppointmentController, getAppointmentByIdController, getAppointmentController } from "../controllers/appointmentsController";
import { userAuth } from "../middlewares/userAuth";
const appointmentsRoutes: Router = Router();

appointmentsRoutes.get('/', getAppointmentController)

appointmentsRoutes.get('/:id', getAppointmentByIdController)

appointmentsRoutes.post("/schedule", userAuth, createAppointmentController)

appointmentsRoutes.put('/cancel/:id', cancelAppointmentController)


export default appointmentsRoutes
