import express from 'express'
import returnUserById from '../middlewares/returnUserById'
import readData from '../middlewares/readData'
import updateData from '../middlewares/updateData'
import checkValidId from '../middlewares/checkValidId'

const router = express.Router()

router.post('/:id', checkValidId(), (req, res) => {
  const data = readData() as any[]
  const userId = parseInt(req.params.id)
  const player = returnUserById(userId)
  let won = false
  let wins = 0
  const dice1 = getRandomIntInclusive(1, 6)
  console.log('First dice thrown: ', dice1)
  const dice2 = getRandomIntInclusive(1, 6)
  console.log('Second dice thrown: ', dice2)
  const result = dice1 + dice2
  if (result === 7) {
    won = true
    console.log('You won!')
  } else {
    console.log('You lost!')
  }
  const game = {
    dice1,
    dice2,
    won
  }
  player.results.push(game)
  for (let i = 0; i < player.results.length; i++) {
    if (player.results[i].won === true) {
      wins += 1
    }
  }
  player.winrate = `${(
    (wins / parseFloat(player.results.length)) *
    100
  ).toFixed(2)}%`
  console.log('Your current winrate is: ', player.winrate)
  data[userId] = player
  updateData(data)
  res.status(201).send(player)
})

router.delete('/:id', checkValidId(), (req, res) => {
  const data = readData() as any[]
  const userId = parseInt(req.params.id)
  data[userId].results.splice(0, data[userId].results.length)
  data[userId].winrate = '0%'
  updateData(data)
  console.log(`Game history from user ${data[userId].name as string} deleted successfully`)
  res.status(204).send()
})

router.get('/:id', checkValidId(), (req, res) => {
  const data = readData() as any[]
  const userId = parseInt(req.params.id)
  console.log(`Showing game history from user ${data[userId].name as string}`)
  res.status(200).json(data[userId].results)
})

function getRandomIntInclusive (min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export default router
