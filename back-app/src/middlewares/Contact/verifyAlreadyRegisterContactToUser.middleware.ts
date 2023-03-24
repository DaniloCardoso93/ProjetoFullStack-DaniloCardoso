import { NextFunction, Request, Response } from "express";
import { AppError } from "../../erros";
import { userRepo } from "../../repositories";

const verifyAlreadyRegisterContactToUserMiddleware = async(
    req:Request, 
    res:Response, 
    next:NextFunction
    ) => {
        const loggerUser = await userRepo.find({
            where:{
                id:req.user.id
            },
            relations:{
                contacts:true
            }
        })
        loggerUser[0].contacts.forEach(element => {
            if(element.email === req.body.email){
                throw new AppError("Contact already exists", 400)
            }
        });
        
        return next()
}


export default verifyAlreadyRegisterContactToUserMiddleware