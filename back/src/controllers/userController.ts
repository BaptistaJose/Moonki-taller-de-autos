import { Request, Response } from "express"
import { createUSerService, getUserByIdService, getUserService, userResponseService } from "../services/userService"
import { credentialService } from "../services/credentialService";
import { User } from "../entities/User";

export const getUserController = async (req: Request, res: Response) =>{
    try {
        const arrUsers: User[] = await getUserService();
        res.status(200).json(arrUsers);
    } catch (err: any) {
        res.status(404).json({
            message: err.message
        })
    }
}

export const getUserByIdController = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params;
        const user: User = await getUserByIdService(Number(id));
        res.status(200).json(user);
        
    } catch (error: any) {
        res.status(404).json({
            message: error.message
        })
    }
};


export const createUserController = async (req:Request, res: Response) =>{
    try {
        const {name, email, birthdate, nDni, username, password} = req.body;
        const newUSer: User = await createUSerService({name, email, birthdate, nDni, username, password});
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
        const userLogin = await credentialService({username, password});
        const user = await userResponseService(userLogin)
        res.status(200).json({
            login: true,
            user
        })
    } catch (error: any) {
        res.status(400).json({
            login: false,
            message: error.message
        })
    }
}