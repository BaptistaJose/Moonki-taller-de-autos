import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={styles.header}>
            <img src="./public/LOGO.png" alt="Logo" className={styles.logo} />
            <nav className={styles.nav}>
                <ul className={styles.navUl}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;