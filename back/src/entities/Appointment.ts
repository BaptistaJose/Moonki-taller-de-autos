import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({name: "appointments"})
export class Appointment{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    date: Date
    @Column()
    time: string
    @Column()
    userId: number
    @Column()
    status: "Active" | "Cancelled"

    @ManyToOne(() => User, (user) => user.appointment)
    user: User
}