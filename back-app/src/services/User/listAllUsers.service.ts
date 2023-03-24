import { userRepo } from "../../repositories"
import { userArrayReturnedShape } from "../../Schemas/User/listUserShape.schema"

export const listAllUsersService = async()=>{
    const users = await userRepo.find()
    
    const res = await userArrayReturnedShape.validate(users, {
        stripUnknown:true
    })
    return res
}