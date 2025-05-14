import { Router } from "express";
const userRoutes: Router = Router();

userRoutes.get('/', (req,res)=>{
    res.status(200).send("Obtener usuarios");
})

userRoutes.get('/:id', (req,res)=>{
    res.status(200).send("Obtener usuario por id")
})

userRoutes.post("/resgiter", (req,res)=>{
    res.status(201).send("Crear usuario")
})

userRoutes.post("/login", (req,res)=>{
    res.send("Login del usuario a la aplicación")
})

export default userRoutes
