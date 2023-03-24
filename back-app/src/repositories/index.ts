import { AppDataSource } from "../data-source";
import Contact from "../entities/contact.entities";
import User from "../entities/user.entities";

export const userRepo = AppDataSource.getRepository(User)
export const contactRepo = AppDataSource.getRepository(Contact)