import { ErrorRequestHandler } from 'express'

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next,
) => {
  const statusCode = 500
  const message = err || 'Something went wrong'

  return res.status(statusCode).json({
    statusCode,
    success: false,
    message,
  })
}
