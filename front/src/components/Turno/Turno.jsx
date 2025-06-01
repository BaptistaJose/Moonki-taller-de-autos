import styles from './Turno.module.css';

const Turno = ({id, date, time, userId, status}) => {
    return (
        <div className={styles.containerAppointment}>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>User:</strong> {userId}</p>
            <p><strong>Status:</strong> {status}</p>
        </div>
    );
}

export default Turno;