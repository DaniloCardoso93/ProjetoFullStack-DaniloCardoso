import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "yup"
import { Assign, ObjectShape } from "yup/lib/object";

const validateSchemaMiddleware =
  (serialize: ObjectSchema<Assign<ObjectShape, any>>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await serialize.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });
      req.body = validated;
      next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
  };

export default validateSchemaMiddleware;