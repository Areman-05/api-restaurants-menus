import type { Request, Response, NextFunction } from 'express';
import type { ObjectSchema } from 'joi';
import { AppError } from '../utils/errors';

export function validateBody(schema: ObjectSchema) {
  return (req: Request, _res: Response, next: NextFunction): void => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      next(new AppError(error.details.map((d) => d.message).join(', '), 400));
      return;
    }

    req.body = value;
    next();
  };
}
