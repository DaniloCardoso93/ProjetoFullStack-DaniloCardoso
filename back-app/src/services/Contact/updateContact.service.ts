import { IUpdateContact } from "../../interfaces";
import { contactRepo } from "../../repositories";


export const updateContactService = async (contactData:IUpdateContact, contactId:string)=>{
        const findContact = await contactRepo.findOneBy({id:contactId})

        const updateContact = contactRepo.create({
            ...findContact,
            ...contactData,
        })

        const updateDone = await contactRepo.save(updateContact)

        return {message:"Update contact successfully", contact:updateDone}
}