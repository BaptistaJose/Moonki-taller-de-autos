import IUserDto from "../dto/IUserDto";
import IUser from "../interfaces/IUser";
import { idCredentialService } from "./credentialService";

let arrUser: IUser[] = [
    {
        id: 1,
        name: "Juan Pérez",
        email: "juan.perez@email.com",
        birthdate: new Date("1990-05-15"),
        nDni: 12345678,
        credentialsId: 1
    },
    {
        id: 2,
        name: "Ana Gómez",
        email: "ana.gomez@email.com",
        birthdate: new Date("1985-10-22"),
        nDni: 87654321,
        credentialsId: 2
    },
    {
        id: 3,
        name: "Carlos Ruiz",
        email: "carlos.ruiz@email.com",
        birthdate: new Date("1992-03-08"),
        nDni: 11223344,
        credentialsId: 3
    }
]

let id: number = 4;

export const getUserService = async (): Promise<IUser[]> =>{
    return arrUser;
};

export const getUserByIdService = async (id: number): Promise<IUser> =>{

    let userById =  arrUser.find((ele)=> ele.id === id)
    if(!userById) throw new Error("El usuario no existe");
        
    return userById
};

export const createUSerService = async (IUserDto: IUserDto): Promise<IUser> =>{
    const newcredentialsId = await idCredentialService(IUserDto.username, IUserDto.password);

     const newUser: IUser ={
        id,
        name: IUserDto.name,
        email: IUserDto.email,
        birthdate: IUserDto.birthdate,
        nDni: IUserDto.nDni,
        credentialsId: newcredentialsId
     };

     arrUser.push(newUser);
     id++;

     return newUser
}

/*En el servicio de usuarios:

Implementar una función que pueda retornar el arreglo completo de usuarios.

Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario,
 debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. 
 Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
*/