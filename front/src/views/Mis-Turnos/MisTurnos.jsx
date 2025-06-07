import { useState, useEffect } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios"

const MisTurnos = () => {
    const [turnos, setTurnos] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/appointments").then(res => setTurnos(res.data)); 
    },[])

    return (
        <div>
        <h1>Mis Turnos</h1>
        <div className={styles.turnosList}>
            {turnos.map((turno) => (
                <Turno 
                    key={turno.id} 
                    date={turno.date} 
                    time={turno.time} 
                    status={turno.status} 
                />
            ))}
        </div>
        </div>
    )
}

export default MisTurnos;