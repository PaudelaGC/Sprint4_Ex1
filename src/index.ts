import express from 'express'
import userRouter from './routes/users'
import upload from 'express-fileupload'
const app = express()
app.use(express.json()) // middleware that turns req.body into json
const PORT = 9999

app.get('/ping', (_, res) => {
  console.log('Ping request at ' + new Date().toLocaleDateString())
  res.send('Pong')
})

app.use('/users', userRouter)

app.use(upload())

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
