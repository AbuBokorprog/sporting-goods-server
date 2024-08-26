import { Response } from 'express'
// successResponse
type Data<T> = {
  statusCode: number
  success: boolean
  message: string
  data: T
}

export const successResponse = <T>(res: Response, data: Data<T>) => {
  return res.status(data.statusCode).json({
    success: data?.success,
    message: data?.message,
    data: data?.data,
  })
}
