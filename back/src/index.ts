import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";


AppDataSource.initialize().then(
    (res) =>{
        console.log("Conexion a la base de datos exitosa");

        server.listen(PORT, ()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`)
})
})
