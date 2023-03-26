import { compare } from "bcryptjs";
import { AppError } from "../../erros";
import { ILogin } from "../../interfaces";
import { userRepo } from "../../repositories";
import jwt from "jsonwebtoken";
import "dotenv/config"

export const loginUserService = async (req:ILogin) =>{

    const user = await userRepo.findOneBy({
        email:req.email
    })
    if(!user){
        throw new AppError("User or password invalid", 403)
    }

    const passMatch = await compare(req.password, user.password)
    if (!passMatch){
        throw new AppError("User or password invalid", 403)
    }

    const token = jwt.sign(
        {
        email:user.email,
        },
        process.env.SECRET_KEY,
        {
            subject:String(user.id),
            expiresIn:"24h",
        }
    )

    return {token, userId:user.id}

}