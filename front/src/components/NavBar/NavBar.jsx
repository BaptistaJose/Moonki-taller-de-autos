import { Link, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const navigate = useNavigate()
    const [user, setUSer] = useState(null);

    useEffect(() => {
        setUSer(JSON.parse(localStorage.getItem("user")));

        const handleStorageChange = (event) =>{
            if(event.key === "user"){
                setUSer(JSON.parse(localStorage.getItem("user")));
            }
        };

        window.addEventListener("storage", handleStorageChange);

        const handleFocus = () =>{
            setUSer(JSON.parse(localStorage.getItem("user")));
        };

        window.addEventListener("focus", handleFocus)

        return ()=>{
            window.removeEventListener("storage", handleStorageChange)
            window.removeEventListener("focus", handleFocus)
        }

    },[])

    const handleLogout = () =>{
        localStorage.removeItem("user")
        setUSer(null);
        navigate("/");
    }

    return (
        <header className={styles.header}>
            <img src="./public/LOGO.png" alt="Logo" className={styles.logo} />
            <nav className={styles.nav}>
                <ul className={styles.navUl}>
                    <li><Link to="/">Home</Link></li>
                    {user ?<>
                    <li><Link to="/appointments">Mis Turnos</Link></li>
                    <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
                    </> :
                    <>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    </>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;