import { Router } from "express";
import { cancelAppointmentController, createAppointmentController, getAppointmentByIdController, getAppointmentController } from "../controllers/appointmentsController";
const appointmentsRoutes: Router = Router();

appointmentsRoutes.get('/', getAppointmentController)

appointmentsRoutes.get('/:id', getAppointmentByIdController)

appointmentsRoutes.post("/schedule", createAppointmentController)

appointmentsRoutes.put('/cancel', cancelAppointmentController)


export default appointmentsRoutes
