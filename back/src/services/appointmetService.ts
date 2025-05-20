import IAppointmentDto from "../dto/IAppointmentDto";
import IAppointment from "../interfaces/IAppointment";

let arrAppointment: IAppointment[] = [
    {
        id: 1,
        date: new Date("2025-05-20"),
        time: "09:00",
        userId: 1,
        status: "Active"
    },
    {
        id: 2,
        date: new Date("2025-05-21"),
        time: "10:30",
        userId: 2,
        status: "Active"
    },
    {
        id: 3,
        date: new Date("2025-05-22"),
        time: "11:15",
        userId: 3,
        status: "Cancelled"
    }
];

let id: number = 4;

export const getAppointmentServices = async (): Promise<IAppointment[]> =>{
    return arrAppointment;
};

export const  getAppointmentByIdService = async (id: number): Promise<IAppointment> =>{

    let idAppointment = arrAppointment.find(ele => ele.id === id)
    if(!idAppointment) throw new Error("El turno no existe");
    return idAppointment
}

export const createAppointmentService = async (appointment: IAppointmentDto): Promise<IAppointment> =>{
    const newAppointment: IAppointment ={
        id,
        date: appointment.date,
        time: appointment.time,
        userId: appointment.userId,
        status: appointment.status ?? "Active"
    };

    arrAppointment.push(newAppointment);
    id++;

    return newAppointment;
}

export const statusAppointmentService = async (id: number): Promise<IAppointment["id"]> =>{
    let newStatus = arrAppointment.find(ele => ele.id === id);
    if(!newStatus) throw new Error("El turno no existe");
    newStatus.status = "Cancelled";
    return newStatus.id;
}
