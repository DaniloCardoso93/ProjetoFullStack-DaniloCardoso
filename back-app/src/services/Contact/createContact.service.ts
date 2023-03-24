import { ICreateContact } from "../../interfaces";
import { contactRepo, userRepo } from "../../repositories";
import jwt from "jsonwebtoken"
import { returnedCreateContactShape } from "../../Schemas/Contact/createContactShape.schema";

export const createContactService = async(req:ICreateContact, userId:string)=>{
    const user = await userRepo.findOneBy({id: userId})

    const contact = contactRepo.create(req)
    const contactData = await contactRepo.save({
        ...contact,
        user: user
    })

    const res = returnedCreateContactShape.validate(contactData, {
        stripUnknown:true
    })

    return res
}