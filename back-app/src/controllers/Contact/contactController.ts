import {Request, Response } from "express"
import { createContactService } from "../../services/Contact/createContact.service"
import { deleteContactService } from "../../services/Contact/deleteContact.service"
import { retrieveContactService } from "../../services/Contact/retrieveContact.service"
import { updateContactService } from "../../services/Contact/updateContact.service"

export const createContactController = async (req:Request, res:Response) =>{
    const contact = await createContactService(req.body, req.user.id)
    return res.status(201).json(contact)

}

export const retrieveContactController = async (req:Request, res:Response) =>{
    const retrieveContact = await retrieveContactService(req.params.id)
    return res.status(200).json(retrieveContact)
}

export const updateContactController = async (req:Request, res:Response) =>{
    const updateContact = await updateContactService(req.body, req.params.id)
    return res.status(200).json(updateContact)

}

export const deleteContactController = async (req:Request, res:Response) =>{
    await deleteContactService(req.params.id)
    return res.status(204).json()

}