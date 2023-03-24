import { Request, Response } from "express"
import { deleteUserService } from "../../services/User/deleteUser.service"
import { listAllUsersService } from "../../services/User/listAllUsers.service"
import { retrieveUserService } from "../../services/User/retrieveUser.service"
import { updateUserService } from "../../services/User/updateUser.service"

export const listAllUsersController = async(req:Request, res:Response)=>{
    const users = await listAllUsersService()
    return res.status(200).json(users)
}

export const retrieveUserController = async(req:Request, res:Response)=>{
    const user = await retrieveUserService(req.params.id)
    return res.status(200).json(user)
}

export const updateUserController = async(req:Request, res:Response)=>{
    const updateUser = await updateUserService(req.body, req.params.id)
    return res.status(200).json(updateUser)
}

export const deleteUserController = async(req:Request, res:Response)=>{
    await deleteUserService(req.params.id)
    return res.status(204).json()
}