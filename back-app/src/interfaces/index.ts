export interface ICreateUserRequest{
    fullName:string;
    email:string;
    phoneNumber:string;
    password:string;
}

export interface ICreateUserResponse{
    id:string;
    fullName:string;
    email:string;
    phoneNumber:string;
    createdAt:Date
    updatedAt:Date
}

export interface ILogin{
    email:string;
    password: string
}

export interface IUserResponse{
    id:string,
    fullName:string,
    email:string,
    phoneNumber:string,
    isActive: boolean,
    createdAt:Date,
    updatedAt:Date,
}

export interface IUserUpdate{
    fullName?:string;
    email?:string;
    phoneNumber?:string;
    password?:string;
}

export interface ICreateContact{
    fullName:string;
    email:string;
    phoneNumber:string;
    userId:string
}

export interface IUpdateContact{
    fullName?:string;
    email?:string;
    phoneNumber?:string;
    userId?:string
}