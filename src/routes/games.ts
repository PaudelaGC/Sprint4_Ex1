import express from 'express'
import returnUserById from '../logic/returnUserById'
import readData from '../logic/readData'
import updateData from '../logic/updateData'
import checkValidId from '../middlewares/checkValidId'
import play from '../logic/play'

const router = express.Router()

router.post('/:id', checkValidId(), (req, res) => {
  const data = readData() as any[]
  const userId = parseInt(req.params.id)
  let player = returnUserById(userId)
  player = play(player)
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

export default router
