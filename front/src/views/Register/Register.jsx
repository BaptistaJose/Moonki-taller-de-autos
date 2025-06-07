import { Formik, Form, Field, ErrorMessage } from 'formik';
import validate from '../../helpers/validate';
import axios from 'axios';
import styles from './Register.module.css';

const Register = () => {

    const formValues = {
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: ''
    };

    return (
        <div className={styles.containerRegister}>
            <h1>Register</h1>
            <Formik
            initialValues={formValues}
            validate={validate}
            onSubmit={(values, actions) => {
                axios.post('http://localhost:3000/users/register', values)
                .then( res =>{
                     alert("Usuario creado correctamente");
                     actions.resetForm();
                })
                .catch(error =>{
                    alert("Error al crear el usuario")
                })
                .finally(() => {
                    actions.setSubmitting(false);
                })
            }}
            >
                <Form >
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.labelForm} >Name:</label>
                        <Field type="text" id="name" name="name" className={styles.inputForm}/>
                        <ErrorMessage name="name" component="div" />
                    </div>

                    <div  className={styles.formGroup}>
                        <label htmlFor="email" className={styles.labelForm}>Email:</label>
                        <Field type="email" id="email" name="email" className={styles.inputForm} />
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div  className={styles.formGroup}>
                        <label htmlFor="birthdate" className={styles.labelForm}>Birthdate:</label>
                        <Field type="date" id="birthdate" name="birthdate" className={styles.inputForm}/>
                        <ErrorMessage name="birthdate" component="div" />
                    </div>

                    <div  className={styles.formGroup}>
                        <label htmlFor="nDni" className={styles.labelForm}>National ID Number:</label>
                        <Field type="number" id="nDni" name="nDni" className={styles.inputForm}/>
                        <ErrorMessage name="nDni" component="div" />
                    </div>

                    <div  className={styles.formGroup}>
                        <label htmlFor="username" className={styles.labelForm}>Username:</label>
                        <Field type="text" id="username" name="username" className={styles.inputForm}/>
                        <ErrorMessage name="username" component="div" />
                    </div>

                    <div  className={styles.formGroup}>
                        <label htmlFor="password" className={styles.labelForm}>Password:</label>
                        <Field type="password" id="password" name="password" className={styles.inputForm}/>
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <button type='submit' className={styles.buttonRegister}>Register</button>
                </Form>

            </Formik>
        </div>
    )
}

export default Register;