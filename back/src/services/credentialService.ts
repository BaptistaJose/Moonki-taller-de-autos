import { AppDataSource } from "../config/data-source";
import ICredentialDto from "../dto/ICredentialDto";
import { Credential } from "../entities/Credential";


 export const idCredentialService = async (CredentialDto: ICredentialDto): Promise<Credential["id"]> =>{
    
    const newCredential = await AppDataSource.getRepository(Credential).create(CredentialDto);
    const result = await AppDataSource.getRepository(Credential).save(newCredential);
    return result.id
    
};

export const credentialService = async (CredentialDto: ICredentialDto): Promise<Credential["id"]> =>{

   let credentialFound = await AppDataSource.getRepository(Credential).findOneBy(CredentialDto)

       if (!credentialFound) throw new Error("Credenciales incorrectas");
  
     return credentialFound.id
   
}

