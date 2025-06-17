import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import { createAppointmentService, getAppointmentByIdService, getAppointmentServices, statusAppointmentService } from "../services/appointmetService";

export const getAppointmentController = async (req: Request, res: Response) =>{
    try {
        const {userId} = req.params
        const appointment: IAppointment[] = await getAppointmentServices(Number(userId));
        res.status(200).json(appointment)
    } catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
};

export const getAppointmentByIdController = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;
        const appointmentId: IAppointment = await getAppointmentByIdService(Number(id));
        res.status(200).json(appointmentId);
    } catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
}

export const createAppointmentController = async (req: Request, res: Response) =>{
    try {
        const {date, time, userId} = req.body
        const newAppointment: IAppointment = await createAppointmentService({date, time, userId})
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const cancelAppointmentController = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;
        const cancelAppointment: IAppointment["id"] = await statusAppointmentService(Number(id));
        res.status(200).json(cancelAppointment)
    } catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
    
}