import { IUserResponse, IUserUpdate } from "../../interfaces";
import { userRepo } from "../../repositories";
import {returnedUpdateUserShape} from "../../Schemas/User/updateUserShape.schema"

export const updateUserService = async(userData:IUserUpdate, userId:string):Promise<IUserResponse> =>{
    const findUser = await userRepo.findOneBy({id: userId})

    const updateUser = userRepo.create({
        ...findUser,
        ...userData,
    })

    await userRepo.save(updateUser)

    const userWithoutPsw = await returnedUpdateUserShape.validate(updateUser, {
        stripUnknown:true
    })

    return userWithoutPsw
}