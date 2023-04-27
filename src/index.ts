import express from 'express'
import userRouter from './routes/users'
import uploadRouter from './routes/upload'
import timeRouter from './routes/time'

const app = express()
app.use(express.json()) // middleware that turns req.body into json
const PORT = 9999

app.get('/ping', (_, res) => {
  console.log('Ping request at ' + new Date().toLocaleDateString())
  res.send('Pong')
})

/**
 * Redirects all functions from users.ts to /users route
 */
app.use('/users', userRouter)

/**
 * Redirects all functions from upload.ts to /upload route
 */
app.use('/upload', uploadRouter)

/**
 * Redirects all functions from time.ts to /time route
 */
app.use('/time', timeRouter)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

export default PORT
