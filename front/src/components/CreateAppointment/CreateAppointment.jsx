import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import validateAppointment from '../../helpers/validateAppointment';
import styles from './appointment.module.css';

const CreateAppointment = ({setUserAppointment}) =>{

    return (
        <>
            <h2 className={styles.h2}>Registre un turno</h2>
        <div className={styles.container}>
        <Formik
        initialValues={{
            date: "",
            time: "",
        }}

        validate = {validateAppointment}

        onSubmit={(values,actions)=>{
            
            const userString = localStorage.getItem("user");
            const user = userString ? JSON.parse(userString) : null;
            const userId = user ? user.id : null;

            const payload ={
                ...values,
                userId: userId
            };

            axios.post("http://localhost:3000/appointments/schedule", payload).then(res => {
                console.log(res.data)
                setUserAppointment(res.data)
                alert("Turno creado correctamente");
                actions.resetForm();
            }).catch(err => {
                alert("Error al crear el turno, intente nuevamente");
            })
            .finally(() => {
                actions.setSubmitting(false);
            });
        }}
        >
            <Form>
                <div className={styles.formContainer}>

                <div className={styles.formGroup}>
                    <label htmlFor="date" className={styles.labelForm}>Fecha:</label>
                    <Field type="date" id="date" name="date" className={styles.inputForm} />
                    <ErrorMessage name="date" component="p" />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="time" className={styles.labelForm}>Hora:</label>
                    <Field type="time" id="time" name="time" className={styles.inputForm} />
                    <ErrorMessage name="time" component="p" />
                </div>

                <button type="submit" className={styles.buttonLogin}>Crear Turno</button>


                </div>
            </Form>
        </Formik>
        </div>
        </>
    )
}

export default CreateAppointment;