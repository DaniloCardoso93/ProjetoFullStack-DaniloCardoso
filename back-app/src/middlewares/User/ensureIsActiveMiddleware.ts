import { NextFunction, Request, Response } from "express";
import { AppError } from "../../erros";
import { userRepo } from "../../repositories";

const ensureIsActiveMiddleware = async (req:Request, res:Response, next:NextFunction) => {
    const foundUser = await userRepo.findOneBy({id:req.params.id})

    if(!foundUser.isActive){
        throw new AppError("User already deleted", 400)
    }

    return next()
}

export default ensureIsActiveMiddleware