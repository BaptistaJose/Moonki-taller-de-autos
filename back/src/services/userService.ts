import { AppDataSource } from "../config/data-source";
import IUserDto from "../dto/IUserDto";
import { User } from "../entities/User";
import { idCredentialService } from "./credentialService";

export const getUserService = async (): Promise<User[]> =>{
    const users: User[] = await AppDataSource.getRepository(User).find();
    return users;
};

export const getUserByIdService = async (id: number): Promise<User> =>{

    let userById = await AppDataSource.getRepository(User).findOneBy({id})
    if(!userById) throw new Error("El usuario no existe");
    return userById;
};

export const createUSerService = async (IUserDto: IUserDto) =>{
    
    if (!IUserDto.name || !IUserDto.email || !IUserDto.username || !IUserDto.password) {
    throw new Error("Faltan datos obligatorios para crear el usuario");
}
    
    const newcredentialsId = await idCredentialService({
        username: IUserDto.username, 
        password: IUserDto.password
    });

      const newUSer= {
        ...IUserDto,
         credentialsId: {id: newcredentialsId}
      }
      
    const user: User = await AppDataSource.getRepository(User).create(newUSer)
    const result = await AppDataSource.getRepository(User).save(user)


    return result;
}
