import { AppError } from "../../erros";
import { userRepo } from "../../repositories";
import { userArrayReturnedShape } from "../../Schemas/User/listUserShape.schema";

export const retrieveUserService = async(userId:string)=>{
    const contactToUser = await userRepo.find({
        where:{
            id:userId
        },
        relations:{
            contacts:true
        }
    })
    const res = await userArrayReturnedShape.validate(contactToUser, {
        stripUnknown:true
    })

    if (res.length){
        return res[0]
    }

    throw new AppError("Invalid user", 404)
}