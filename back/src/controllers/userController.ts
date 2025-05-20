import { Request, Response } from "express"
import IUser from "../interfaces/IUser"
import { createUSerService, getUserByIdService, getUserService } from "../services/userService"
import { credentialService } from "../services/credentialService";

export const getUserController = async (req: Request, res: Response) =>{
    try {
        const arrUsers: IUser[] = await getUserService();
        res.status(200).json(arrUsers);
    } catch (err: any) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const getUserByIdController = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;
        const user: IUser = await getUserByIdService(Number(id));
        res.status(200).json(user);
        
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
};


export const createUserController = async (req:Request, res: Response) =>{
    try {
        const {name, email, birthdate, nDni, username, password} = req.body;
        const newUSer: IUser = await createUSerService({name, email, birthdate, nDni, username, password});
        res.status(201).json(newUSer);
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
}

export const loginUserController = async (req: Request, res: Response)=>{
    try {
        const {username, password} = req.body;
        const userLogin = await credentialService(username, password);
        res.status(200).json(userLogin)
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        })
    }
}