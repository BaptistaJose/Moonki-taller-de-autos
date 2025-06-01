import misTurnos from "../../helpers/myAppointments";
import { useState } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";

const MisTurnos = () => {
    const [turnos, setTurnos] = useState(misTurnos);
    return (
        <div>
        <h1>Mis Turnos</h1>
        <div className={styles.turnosList}>
            {turnos.map((turno) => (
                <Turno 
                    key={turno.id} 
                    date={turno.date} 
                    time={turno.time} 
                    userId={turno.userId} 
                    status={turno.status} 
                />
            ))}
        </div>
        </div>
    )
}

export default MisTurnos;