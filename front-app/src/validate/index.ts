import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup
    .string()
    .email('Deve ser um email válido')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória'),
});

export const RegisterSchema = yup.object({
  fullName: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Deve ser uma email válido").required("Email é obrigatório"),
  password: yup.string().required("Senha obrigatória").min(4, "Senha precisa conter 4 dígitos"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Confirmação de senha deve ser igual a senha'),
  phoneNumber: yup.string().required("Número de telefone com ddd ex:(21)123456789"),
})

export const ContactRegister = yup.object({
    fullName: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Deve ser uma email válido").required("Email é obrigatório"),
    phoneNumber: yup.string().required("Número de telefone com ddd ex:(21)123456789"),
})