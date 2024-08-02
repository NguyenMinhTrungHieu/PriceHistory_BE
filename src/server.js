import express from 'express'
import cors from 'cors'
import config from './config/mongodb.js'
import Router from './routes/v1/index.js'

// Tạo ứng dụng Express
const app = express()

// Cấu hình CORS
const corsOptions = {
  origin: 'https://pricehistory-fe.vercel.app/', // Thay bằng origin của frontend của bạn
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}

// Sử dụng CORS middleware
app.use(cors(corsOptions))

app.use(express.json())
app.use('/v1', Router)

// Khởi động server
app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${config.port}`)
})

