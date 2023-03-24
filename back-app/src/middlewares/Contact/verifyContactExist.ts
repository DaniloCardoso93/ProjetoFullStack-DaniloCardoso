import { NextFunction, Request, Response } from "express"
import { AppError } from "../../erros"
import { userRepo } from "../../repositories"


const verifyContactExist = async(req:Request, res:Response, next:NextFunction)=>{
    const foundUser = await userRepo.findOneBy({email: req.body.email})

    if(!foundUser){
        throw new AppError("Contact is not exists")
    }

    if(foundUser.phoneNumber === req.body.phoneNumber && foundUser.fullName === req.body.fullName){
        return next()
    }

    throw new AppError("Email, PhoneNumber or Fullname is not correct", 401)
}


export default verifyContactExist