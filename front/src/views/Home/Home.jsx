import styles from './Home.module.css';

const Home = () => {
    return (<>
        <h1>MOONKI - Taller de autos de lujo</h1>
        <div className={styles.containerTexto}>
            <p>Bienvenido a nuestro taller de autos de lujo, donde la excelencia y la atención al detalle son nuestra prioridad. Aquí, cada vehículo es tratado con el máximo cuidado y profesionalismo.</p>
            <p>Ofrecemos una amplia gama de servicios, desde mantenimiento regular hasta reparaciones complejas, asegurando que su auto siempre esté en las mejores condiciones.</p>
            <p>Contamos con un equipo de expertos altamente capacitados, equipados con la última tecnología y herramientas para garantizar un servicio de primera calidad.</p>
            <p>Su satisfacción es nuestra misión. Nos comprometemos a brindarle un servicio excepcional y a superar sus expectativas en cada visita.</p>
            <p>Atentamente, el equipo de MOONKI.</p>
        </div>
        <div className={styles.containerImagen}>

        <div className={styles.divImagen}>
            <img src="./taller-img1.png" alt="Taller de autos de lujo" className={styles.img} />
        </div>
        <div className={styles.divImagen}>
            <img src="./taller-img2.png" alt="Taller de autos de lujo" className={styles.img} /> 
        </div>
        <div className={styles.divImagen}>
            <img src="./mecanico.png" alt="Taller de autos de lujo" className={styles.img} />
        </div>
        <div className={styles.divImagen}>
            <img src="./mecanico2.png" alt="Taller de autos de lujo" className={styles.img} />
        </div>
        <div className={styles.divImagen}>
            <img src="./autoTaller.png" alt="Taller de autos de lujo" className={styles.img}/>
        </div>
    
        </div>
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>Dirección: Av. Cabildo 1234, Buenos Aires (CABA), Argentina | Tel: (123) 456-7890 | Email: contacto@tallerdelujo.com</p>
                <p>
                    Síguenos:
                    <a href="https://facebook.com" target="_blank"> Facebook</a> |
                    <a href="https://instagram.com" target="_blank">Instagram</a> |
                    <a href="https://twitter.com" target="_blank">Twitter</a>
                </p>
            </div>
            <p>© 2023 MOONKI. Todos los derechos reservados.</p>
        </footer>
    </>
    )
}

export default Home;