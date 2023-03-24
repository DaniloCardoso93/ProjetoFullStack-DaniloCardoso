import { AppError } from "../../erros"
import { contactRepo } from "../../repositories"
import { returnedRetrieveContactShape } from "../../Schemas/Contact/retrieveContactShape.schema"


export const retrieveContactService = async(contactId:string)=>{
    const contactToUser = await contactRepo.find({
        where:{
            id:contactId
        },
        relations:{
            user:true
        }
    })

    const res = await returnedRetrieveContactShape.validate(contactToUser[0], {
        stripUnknown:true
    })

    return res
}