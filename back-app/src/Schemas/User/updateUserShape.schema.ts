import * as yup from "yup"


export const updateUserShape = yup.object().shape({
    password:yup.string().notRequired(),
    phoneNumber:yup.string().notRequired(),
    email:yup.string().email().notRequired(),
    fullName:yup.string().notRequired(),
})


export const returnedUserShape = yup.object().shape({
    id:yup.string().required(),
    fullName:yup.string().required(),
    email:yup.string().email().required(),
    phoneNumber:yup.string().required(),
    isActive: yup.boolean().required(),
    createdAt:yup.date().required(),
    updatedAt:yup.date().required(),
    contacts:yup.array().of(yup.object().shape({
        id:yup.string().required(),
        fullName:yup.string().required(),
        email:yup.string().email().required(),
        phoneNumber:yup.string().required(),
    })),
})

export const returnedUpdateUserShape = yup.object().shape({
    updatedAt:yup.date().required(),
    createdAt:yup.date().required(),
    isActive: yup.boolean().required(),
    phoneNumber:yup.string().required(),
    email:yup.string().email().required(),
    fullName:yup.string().required(),
    id:yup.string().required(),
})