import styles from './Turno.module.css';

const Turno = ({ date, time, status}) => {
    return (
        <div className={styles.containerAppointment}>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Status:</strong> {status}</p>
            <button>Cancelar Turno</button>
        </div>
    );
}

export default Turno;