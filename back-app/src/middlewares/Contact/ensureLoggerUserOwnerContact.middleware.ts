import { NextFunction, Request, Response } from "express";
import { AppError } from "../../erros";
import { contactRepo } from "../../repositories";

const ensureLoggerUserOwnerContactMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    const paramsId = req.params.id;
    const loggedUserId = req.user.id;

    const foundParamsId = await contactRepo.find({
        where:{
            id: req.params.id
        },
        relations:{
            user:true
        }
        })  
    if (loggedUserId === foundParamsId[0].user.id) {
        return next()
    }
  
    throw new AppError("Missing authorization", 401);
}

export default ensureLoggerUserOwnerContactMiddleware