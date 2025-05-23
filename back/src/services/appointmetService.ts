import { AppDataSource } from "../config/data-source";
import IAppointmentDto from "../dto/IAppointmentDto";
import { Appointment } from "../entities/Appointment";


export const getAppointmentServices = async (): Promise<Appointment[]> =>{
    
    const appointment: Appointment[] =  await AppDataSource.getRepository(Appointment).find();
    return appointment;
};

export const  getAppointmentByIdService = async (id: number): Promise<Appointment> =>{

    const appointmentId =  await AppDataSource.getRepository(Appointment).findOneBy({id});
    if(!appointmentId) throw new Error("El turno no existe");    
    return appointmentId
}

export const createAppointmentService = async (appointmentDto: IAppointmentDto): Promise<Appointment> =>{
 const appointment = await AppDataSource.getRepository(Appointment).create(appointmentDto);
 const result =  await AppDataSource.getRepository(Appointment).save(appointment);
 return result;
}

export const statusAppointmentService = async (id: number): Promise<Appointment["id"]> =>{
    
    let appointmentId =  await AppDataSource.getRepository(Appointment).findOneBy({id});
    if(!appointmentId) throw new Error("El turno no existe"); 

    appointmentId.status = "Cancelled"
    return appointmentId.id
}
