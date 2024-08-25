import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  mongodb: process.env.MONGODB_URL,
  publishable_key: process.env.STRIPE_PUBLISHABLE_KEY,
  secret_key: process.env.STRIPE_SECRET_KEY,
}
