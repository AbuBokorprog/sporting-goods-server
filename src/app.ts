import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Sporting Goods Shop!')
})

export default app
