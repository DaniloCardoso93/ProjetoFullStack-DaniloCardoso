import { NextFunction, Request, Response } from "express"
import { AppError } from "../../erros"
import { userRepo } from "../../repositories"


const verifyEmailExist = async(req:Request, res:Response, next:NextFunction)=>{
    const emailExist = await userRepo.findOneBy({email: req.body.email})

    if (emailExist) {
        throw new AppError("Email already exists", 409);
      }
    return next()
}


export default verifyEmailExist