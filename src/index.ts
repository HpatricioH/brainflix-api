import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import { videoRouter } from './v1/routes/videosRoutes'

dotenv.config()

const app: Application = express()
const PORT = process.env.PORT

// middleware
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/videos', videoRouter)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
