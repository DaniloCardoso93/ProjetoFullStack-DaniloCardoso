import {Request, Response } from "express"
import { loginUserService } from "../../services/Session/login.service"
import { createUserService } from "../../services/User/createUser.service"

const createUserController = async(req:Request, res:Response) =>{
    const user = await createUserService(req.body)
    return res.status(201).json(user)
}


const loginUserController = async (req:Request, res:Response) => {
    const token = await loginUserService(req.body)
    return res.status(200).json(token)
}


export {createUserController, loginUserController}