import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={styles.header}>
            <img src="./public/LOGO.png" alt="Logo" className={styles.logo} />
            <nav className={styles.nav}>
                <ul className={styles.navUl}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/appointments">Mis Turnos</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;