import { Router } from "express";
import { loginUserController } from "../../controllers/Session/session.controler";
import { validateSchemaMiddleware } from "../../middlewares";
import loginShape from "../../Schemas/Session/loginShape.schema";

const loginRouter = Router()

loginRouter.post("", validateSchemaMiddleware(loginShape), loginUserController)

export default loginRouter