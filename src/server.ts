import mongoose from 'mongoose'
import config from './app/config'
import app from './app'
import { Server } from 'http'

let server: Server
// server
async function main() {
  try {
    await mongoose.connect(`${config.mongodb}`)
    server = app.listen(config.port, () => {
      console.log(`http://localhost:${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()

process.on('unhandledRejection', () => {
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  process.exit(1)
})
