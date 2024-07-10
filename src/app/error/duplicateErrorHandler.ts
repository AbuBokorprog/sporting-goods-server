import { TErrorGeneric, TErrorSources } from '../interface/error'

export const duplicateErrorHandler = (err: {
  message: string
}): TErrorGeneric => {
  const match = err.message.match(/"([^"]*)"/)

  const extractedMessage = match && match[1]

  const errorSources: TErrorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exist.`,
    },
  ]
  const statusCode = 400

  return {
    statusCode,
    message: 'Mongoose duplicate error',
    errorSources,
  }
}
