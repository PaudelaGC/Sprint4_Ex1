import express from 'express'
import readData from '../middlewares/readData'
import updateData from '../middlewares/updateData'
import fileUpload from 'express-fileupload'
import checkIfAvailable from '../middlewares/checkIfAvailable'
import checkHighestId from '../middlewares/checkHighestId'
import checkValidId from '../middlewares/checkValidId'
import returnUserById from '../middlewares/returnUserById'

const router = express.Router()

router.post('/', fileUpload(), checkIfAvailable(), (req, res) => {
  const playerName = req.body.name
  const data = readData() as Object[]
  const date = new Date()
  const newId = checkHighestId()
  const newUser = {
    id: (newId + 1),
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

router.put('/:id', fileUpload(), checkValidId(), checkIfAvailable(), (req, res) => {
  const newName = req.body.name
  const userId = parseInt(req.params.id)
  const data = readData() as any[]
  const updatedUser = returnUserById(userId)
  updatedUser.name = newName
  data[userId] = updatedUser
  updateData(data)
  console.log('Username changed succesfully')
  res.status(200).json(updatedUser)
})

router.get('/', (_req, res) => {
  const data = readData() as any[]
  const userList = []
  for (let i = 0; i < data.length; i++) {
    const user = {
      name: data[i].name,
      winrate: data[i].winrate
    }
    userList.push(user)
  }
  res.status(200).json(userList)
})

export default router
