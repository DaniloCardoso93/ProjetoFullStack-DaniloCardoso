import { ICreateUserRequest, ICreateUserResponse } from "../../interfaces";
import { userRepo } from "../../repositories";
import { returnedCreateUserShape } from "../../Schemas/User/createUserShape.schema";

export const createUserService = async(req:ICreateUserRequest):Promise<ICreateUserResponse> => {
    const user = userRepo.create(req)

    await userRepo.save(user)

    const userRes = await returnedCreateUserShape.validate(user, {
        stripUnknown:true
    });

    return userRes
}