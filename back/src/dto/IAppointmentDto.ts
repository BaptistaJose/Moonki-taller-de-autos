interface IAppointmentDto{
    date: Date, 
    time: string, 
    userId: number, 
    status?: "Active" | "Cancelled"
}

export default IAppointmentDto;