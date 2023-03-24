import { contactRepo } from "../../repositories"

export const deleteContactService = async (contactId:string) =>{
    await contactRepo.delete({id: contactId})
    return {}
}