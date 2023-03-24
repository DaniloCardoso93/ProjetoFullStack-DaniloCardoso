import { NextFunction, Request, Response } from "express";
import { AppError } from "../../erros";

const ensureLoggerUserMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
    const paramsId = req.params.id;
    const loggedUserId = req.user.id;
  
    if (loggedUserId === paramsId) {
      return next();
    }
  
    throw new AppError("Missing permissions", 401);
}

export default ensureLoggerUserMiddleware