import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import validateLogin from '../../helpers/validateLogin';
import styles from './Login.module.css';

const Login = () => {
    const formValues = {
        username: '',
        password: ''
    };

    return (
        <div className={styles.containerLogin}>
            <h1>Login</h1>
            <Formik
                initialValues={formValues}
                validate={validateLogin}
                onSubmit={(values, actions) => {
                    axios.post('http://localhost:3000/users/login', values)
                        .then(res => {
                            alert("Login successful");
                            actions.resetForm();
                        })
                        .catch(error => {
                            alert("Credentials are incorrect or user does not exist");
                        })
                        .finally(() => {
                            actions.setSubmitting(false);
                        });
                }}
            >
                <Form>
                    <div className={styles.formGroup}>
                        <label htmlFor="username" className={styles.labelForm}>Username:</label>
                        <Field type="text" id="username" name="username" className={styles.inputForm}/>
                        <ErrorMessage name="username" component="div" />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.labelForm}>Password:</label>
                        <Field type="password" id="password" name="password" className={styles.inputForm}/>
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <button type="submit" className={styles.buttonLogin}>Login</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;