import * as yup from "yup"

export const createUserShape = yup.object().shape({
    password:yup.string().required(),
    phoneNumber:yup.string().required(),
    email:yup.string().email().required(),
    fullName:yup.string().required(),
})

export const returnedCreateUserShape = yup.object().shape({
    updatedAt:yup.date().required(),
    createdAt:yup.date().required(),
    isActive: yup.boolean().required(),
    phoneNumber:yup.string().required(),
    email:yup.string().email().required(),
    fullName:yup.string().required(),
    id:yup.string().required(),
})
