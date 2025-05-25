import { NextFunction, Request, Response } from "express";
import { credentialService } from "../services/credentialService";

export const userAuth =  (req: Request, res:Response, next: NextFunction) =>{
    const {username, password} = req.body;
    const userLogin =  credentialService({username,password})
    if(!userLogin) {
        res.status(404).json({
            error: "Debes estar registrado y logueado para poder agendar un turno"
        })
        return
    }
    next();
}