import { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import { zodErrorHandler } from '../error/zodErrorhandler'
import { TErrorSources } from '../interface/error'

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next,
) => {
  let statusCode = 500
  let message = err || 'Something went wrong'

  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ]

  if (err instanceof ZodError) {
    const simplifiedError = zodErrorHandler(err)

    message = simplifiedError.message
    statusCode = simplifiedError.statusCode
    errorSources = simplifiedError.errorSources
  }

  return res.status(statusCode).json({
    statusCode,
    success: false,
    message,
    errorSources,
    stack: err?.stack,
  })
}
