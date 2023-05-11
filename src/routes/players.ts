import express from 'express'
import readData from '../middlewares/readData'
import updateData from '../middlewares/updateData'
import fileUpload from 'express-fileupload'
import checkIfAvailable from '../middlewares/checkIfAvailable'

const router = express.Router()

router.post('/', fileUpload(), checkIfAvailable(), (req, res) => {
  const playerName = req.body.name
  const data = readData() as Object[]
  const date = new Date()
  const newUser = {
    id: 9999,
    name: playerName,
    results: [],
    winrate: '0%',
    createdAt: date.toString()
  }
  data.push(newUser)
  updateData(data)
  console.log('New user created successfully')
  res.status(201).json(newUser)
})

export default router
