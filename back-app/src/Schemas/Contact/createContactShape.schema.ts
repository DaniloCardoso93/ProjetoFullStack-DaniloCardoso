import * as yup from "yup"

export const createContactShape = yup.object().shape({
    fullName:yup.string().required(),
    email:yup.string().email().required(),
    phoneNumber:yup.string().required(),
})

export const returnedCreateContactShape = yup.object().shape({
    user: yup.object().shape({
        fullName:yup.string().required(),
        id:yup.string().required(),
    }),
    updatedAt:yup.date().required(),
    createdAt:yup.date().required(),
    phoneNumber:yup.string().required(),
    email:yup.string().email().required(),
    fullName:yup.string().required(),
    id:yup.string().required(),
})
