import { Router } from "express";
const turnsRoutes: Router = Router();

turnsRoutes.get('/', (req,res)=>{
    res.status(200).send("Obtener turnos");
})

turnsRoutes.get('/:id', (req,res)=>{
    res.status(200).send("Obtener turno por id")
})

turnsRoutes.post("/schedule", (req,res)=>{
    res.status(201).send("Crear un turno")
})

turnsRoutes.put('/cancel', (req,res)=>{
    res.send("cancelar turno")
})


export default turnsRoutes
