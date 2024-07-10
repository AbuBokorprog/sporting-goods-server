import { ErrorRequestHandler } from 'express'
import { ZodError } from 'zod'
import { zodErrorHandler } from '../error/zodErrorhandler'
import { TErrorSources } from '../interface/error'
import { ValidationError } from '../error/mongooseValidationErrorHandler'
import { castErrorhandler } from '../error/castErrorHandler'
import { duplicateErrorHandler } from '../error/duplicateErrorHandler'
import { AppError } from '../error/AppError'

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next,
) => {
  let statusCode = 500
  let message = 'Something went wrong'

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
  } else if (err.name === 'ValidationError') {
    const simplifiedError = ValidationError(err)

    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorSources = simplifiedError.errorSources
  } else if (err.name === 'CastError') {
    const simplifiedError = castErrorhandler(err)

    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorSources = simplifiedError.errorSources
  } else if (err.code === 11000) {
    const simplifiedError = duplicateErrorHandler(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorSources = simplifiedError.errorSources
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode
    message = err.message
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ]
  } else if (err instanceof Error) {
    message = err.message
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ]
  }

  return res.status(statusCode).json({
    statusCode,
    success: false,
    message,
    errorSources,
    stack: err?.stack,
  })
}
