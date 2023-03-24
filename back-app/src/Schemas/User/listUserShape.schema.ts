import * as yup from "yup"


export const userArrayReturnedShape = yup.array().of(yup.object().shape({
    contacts:yup.array().of(yup.object().shape({
        isActive:yup.boolean().notRequired(),
        phoneNumber:yup.string().required(),
        email:yup.string().email().required(),
        fullName:yup.string().required(),
        id:yup.string().required(),
    })),
    createdAt:yup.date().required(),
    updatedAt:yup.date().required(),
    isActive: yup.boolean().required(),
    phoneNumber:yup.string().required(),
    email:yup.string().email().required(),
    fullName:yup.string().required(),
    id:yup.string().required(),
}))