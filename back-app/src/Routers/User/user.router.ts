import { Router } from "express";
import { createUserController } from "../../controllers/Session/session.controler";
import { deleteUserController, listAllUsersController, retrieveUserController, updateUserController } from "../../controllers/User/user.controller";
import * as middleware from "../../middlewares";
import { createUserShape } from "../../Schemas/User/createUserShape.schema";
import { updateUserShape } from "../../Schemas/User/updateUserShape.schema";

const userRouter = Router()

userRouter.post(
    "",
    middleware.validateSchemaMiddleware(createUserShape),
    middleware.verifyEmailExist,
    middleware.verifyPhoneNumberExist,
    createUserController
    )

userRouter.get(
    "",
    listAllUsersController,
)

userRouter.get(
    "/:id",
    middleware.ensureAuthMiddleware,
    middleware.ensureParamsIdMiddleware,
    middleware.ensureIsActiveMiddleware,
    retrieveUserController,
)

userRouter.patch(
    "/:id",
    middleware.validateSchemaMiddleware(updateUserShape),
    middleware.ensureAuthMiddleware,
    middleware.ensureParamsIdMiddleware,
    middleware.ensureLoggerUserMiddleware,
    middleware.ensureIsActiveMiddleware,
    updateUserController,
    )

userRouter.delete(
    "/:id",
    middleware.ensureAuthMiddleware,
    middleware.ensureParamsIdMiddleware,
    middleware.ensureLoggerUserMiddleware,
    middleware.ensureIsActiveMiddleware,
    deleteUserController,
    )






export default userRouter