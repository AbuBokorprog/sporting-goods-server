import mongoose from 'mongoose'
import { TErrorGeneric } from '../interface/error'

export const ValidationError = (
  err: mongoose.Error.ValidationError,
): TErrorGeneric => {
  const errorSources = Object.values(err.errors).map(
    (err: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: err.path,
        message: err.message,
      }
    },
  )

  return {
    statusCode: 400,
    message: 'Mongoose validation Error',
    errorSources,
  }
}
