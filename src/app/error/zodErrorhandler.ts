import { ZodError, ZodIssue } from 'zod'
import { TErrorGeneric, TErrorSources } from '../interface/error'

export const zodErrorHandler = (err: ZodError): TErrorGeneric => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    }
  })

  const statusCode = 400

  return {
    statusCode,
    message: 'Zod error',
    errorSources,
  }
}
