import express from 'express'
import playersRouter from './routes/players'
import gamesRouter from './routes/games'
import rankingRouter from './routes/ranking'

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
app.use('/players', playersRouter)

app.use('/games', gamesRouter)

app.use('/ranking', rankingRouter)

//Catch errors from middlewares and bad user requests

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})

export default PORT
