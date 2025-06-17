import { useState, useEffect } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios"
import CreateAppointment from "../../components/CreateAppointment/CreateAppointment";
import {useNavigate} from "react-router-dom"

const MisTurnos = () => {
    const navigate = useNavigate();
    const [turnos, setTurnos] = useState([]);

    useEffect(()=>{
        const user= JSON.parse(localStorage.getItem("user"));
        
        if(!user) navigate("/")  

            axios.get(`http://localhost:3000/appointments/${user.id}`).then(res =>{ 
                localStorage.setItem("appointment", JSON.stringify(res.data))
                setTurnos(res.data)
            }); 

    },[])

    const handleAppointment = (newAppointment) =>{
        setTurnos(prevState => [...prevState, newAppointment])
    };

    const handleCancellAppointment = () =>{

        const user= JSON.parse(localStorage.getItem("user"));
         axios.get(`http://localhost:3000/appointments/${user.id}`).then(res =>{ 
                localStorage.setItem("appointment", JSON.stringify(res.data))
                setTurnos(res.data)
            }); 
    }

    return (
        <div>
        <CreateAppointment setUserAppointment={handleAppointment}/>
        <h1>Mis Turnos</h1>
        <div className={styles.turnosList}>
            {turnos.map((turno) => (
                <Turno 
                    onCancell={handleCancellAppointment}
                    key={turno.id} 
                    appointment={turno}
                />
            ))}
        </div>
        </div>
    )
}

export default MisTurnos;