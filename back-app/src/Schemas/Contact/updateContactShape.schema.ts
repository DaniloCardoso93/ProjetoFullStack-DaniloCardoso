import * as yup from "yup"



export const updateContactShape = yup.object().shape({
    fullName:yup.string().notRequired(),
    email:yup.string().email().notRequired(),
    phoneNumber:yup.string().notRequired(),
})

