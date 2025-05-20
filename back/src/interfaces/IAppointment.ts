interface IAppointment{
    id: number,
    date: Date,
    time: string,
    userId: number,
    status: "Active" | "Cancelled"
}

export default IAppointment;