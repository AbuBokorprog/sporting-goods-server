import mongoose from 'mongoose'
import { TErrorGeneric, TErrorSources } from '../interface/error'

export const castErrorhandler = (
  error: mongoose.Error.CastError,
): TErrorGeneric => {
  const errorSources: TErrorSources = [
    {
      path: error.path,
      message: error.message,
    },
  ]

  return {
    statusCode: 400,
    message: 'Mongoose cast error',
    errorSources,
  }
}
