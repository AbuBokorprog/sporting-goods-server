import { NextFunction, Request, Response } from 'express'

export const notFoundError = (
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  return res.status(404).json({
    statusCode: 404,
    success: false,
    message: 'Not Found',
  })
}
