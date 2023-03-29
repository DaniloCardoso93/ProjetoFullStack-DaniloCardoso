import { Router } from "express"
import * as middleware from "../../middlewares"
import { createContactController, deleteContactController, retrieveContactController, updateContactController } from "../../controllers/Contact/contactController"
import { createContactShape } from "../../Schemas/Contact/createContactShape.schema"
import { updateContactShape } from "../../Schemas/Contact/updateContactShape.schema"

const contactRouter = Router()

contactRouter.post(
    "",
    middleware.validateSchemaMiddleware(createContactShape),
    middleware.ensureAuthMiddleware,
    middleware.verifyAlreadyRegisterContactToUserMiddleware,
    createContactController
    )

contactRouter.get(
    "/:id",
    middleware.ensureAuthMiddleware,
    middleware.ensureContactParamsIdExistsMiddleware,
    middleware.ensureLoggerUserOwnerContactMiddleware,
    retrieveContactController
)

contactRouter.patch(
    "/:id",
    middleware.validateSchemaMiddleware(updateContactShape),
    middleware.ensureAuthMiddleware,
    middleware.ensureContactParamsIdExistsMiddleware,
    middleware.ensureLoggerUserOwnerContactMiddleware,
    updateContactController
)


contactRouter.delete(
    "/:id",
    middleware.ensureAuthMiddleware,
    middleware.ensureContactParamsIdExistsMiddleware,
    middleware.ensureLoggerUserOwnerContactMiddleware,
    deleteContactController,
    )




export default contactRouter