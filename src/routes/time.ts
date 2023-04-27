import express, { Request, Response } from 'express'
import fileUpload from 'express-fileupload'
import routerCache from '../routerCache'
import CORS from '../enableCORS'
const router = express.Router()

router.post('/', fileUpload(), routerCache(), CORS(), (req: Request, res: Response) => {
  if (req.body.name !== '' && 'name' in req.body) {
    const d = new Date().toString()
    const userTime = {
      date: d
    }
    res.status(201).json(userTime)
  } else {
    res.status(422).send('No "name" key or value found')
  }
})

export default router
