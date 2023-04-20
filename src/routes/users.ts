import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  const host = req.get('host') as string
  const route = req.originalUrl
  const fullUrl = `${host}${route}`
  const me = {
    name: 'Pau Guillén Carranza',
    age: '23',
    requestFrom: fullUrl
  }
  res.status(200).json(me)
})

export default router
