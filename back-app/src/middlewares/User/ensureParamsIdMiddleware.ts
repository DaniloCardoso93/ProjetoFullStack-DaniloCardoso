import { NextFunction, Request, Response } from "express";
import { AppError } from "../../erros";
import { userRepo } from "../../repositories";

const ensureParamsIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const foundParamsId = await userRepo.findOneBy({id: req.params.id})

        if(!foundParamsId){
            throw new AppError("User not found", 404);
        }
    
        return next()
        
    } catch (error) {
            throw new AppError("User not found", 404);
       
    }
}

export default ensureParamsIdMiddleware