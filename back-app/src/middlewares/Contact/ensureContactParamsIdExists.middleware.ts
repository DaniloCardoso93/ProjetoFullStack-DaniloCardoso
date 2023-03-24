import { NextFunction, Request, Response } from "express";
import { AppError } from "../../erros";
import { contactRepo } from "../../repositories";

const ensureContactParamsIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const foundParamsId = await contactRepo.findOneBy({id: req.params.id})

    if(!foundParamsId){
        throw new AppError("Contact not found", 404);
    }

    return next()
}

export default ensureContactParamsIdExistsMiddleware