import { NextFunction, Request, Response } from "express"
import { AppError } from "../../erros"
import { userRepo } from "../../repositories"


const verifyPhoneNumberExist = async(req:Request, res:Response, next:NextFunction)=>{
    
    const phoneNumberExists = await userRepo.findOneBy({phoneNumber: req.body.phoneNumber})

    if (phoneNumberExists) {
        throw new AppError("Phone Number already exists", 409);
      }
    return next()
}


export default verifyPhoneNumberExist