import ICredential from "../interfaces/ICredential";

let arrCredential: ICredential[] = [
        {
        id: 1,
        username: "usuario1",
        password: "pass123"
    },
    {
        id: 2,
        username: "usuario2",
        password: "pass456"
    },
    {
        id: 3,
        username: "usuario3",
        password: "pass789"
    }
];

 let id: number = 4;

 export const idCredentialService = async (username: string, password: string): Promise<ICredential["id"]> =>{
    const newCredential: ICredential = {
        id,
        username,
        password
    };

    arrCredential.push(newCredential);
    id++;

    return newCredential.id;
};

export const credentialService = async (username: string, password: string): Promise<ICredential["id"]> =>{

   let credentialCheck =  arrCredential.find((ele) => ele.username === username && ele.password === password)

       if (!credentialCheck) throw new Error("Credenciales incorrectas");
    
   return credentialCheck.id

}

/*Implementar una función que recibirá username y password, 
y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, 
si el password es correcto. En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales. 
*/