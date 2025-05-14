import { PORT } from "./config/envs";
import server from "./server";

server.listen(PORT, ()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`)
})
