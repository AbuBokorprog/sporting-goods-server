import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  mongodb: process.env.MONGODB_URL,
}
