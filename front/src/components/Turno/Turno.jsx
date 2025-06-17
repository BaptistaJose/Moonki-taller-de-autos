import axios from 'axios';
import styles from './Turno.module.css';

const Turno = ({onCancell, appointment}) => {
    const {id, date, time, status} = appointment

    const handleCancell = async () =>{
        try {
         await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
         alert("Turno cancelado con éxito")
         onCancell()
        } catch (err) {
            alert("No se pudo cancelar el turno")
        }
    }

    return (
        <div className={styles.containerAppointment}>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Status:</strong> {status}</p>
           {status === "Active" && <button onClick={handleCancell}>Cancelar Turno</button>}
        </div>
    );
}

export default Turno;