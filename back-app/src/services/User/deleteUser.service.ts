import { userRepo } from "../../repositories";

export const deleteUserService = async(userId:string):Promise<object>=>{

    const foundUser = await userRepo.findOneBy({id: userId})

    const isActiveFalse = {
        isActive: false,
    }

    const deleteUser = userRepo.create({
        ...foundUser,
        ...isActiveFalse,
    })

    await userRepo.save(deleteUser)

    return {}
}