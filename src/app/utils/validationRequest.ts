import { NextFunction, Request, Response } from 'express'
import { ZodSchema } from 'zod'
// validation request
export const validationRequest = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parse(req.body)
      next()
    } catch (error) {
      next(error)
    }
  }
}
