export type TErrorSources = {
  path: string | number
  message: string
}[]

export type TErrorGeneric = {
  statusCode: number
  message: string
  errorSources: TErrorSources
}
