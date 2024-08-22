import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import { globalErrorHandler } from './app/middleware/globalError'
import { notFoundError } from './app/middleware/notFound'
const app: Application = express()

app.use(express.json())
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Sporting Goods Shop!')
})

app.use('/api', router)

app.use(globalErrorHandler)
app.use(notFoundError)

export default app
