import * as yup from "yup"


export const returnedRetrieveContactShape = yup.object().shape({
    user: yup.object().shape({
        updatedAt:yup.date().required(),
        createdAt:yup.date().required(),
        isActive:yup.boolean().required(),
        phoneNumber:yup.string().required(),
        email:yup.string().email().required(),
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