import express, { Request, Response } from 'express'
import fileUpload from 'express-fileupload'
import routerCache from '../middlewares/routerCache'
import CORS from '../middlewares/enableCORS'
import authenticate from '../middlewares/authenticate'
const router = express.Router()

/**
 * Checks the current local time. Authentication must be configured and provided to work, aswell as a login name
 */
router.post('/', authenticate(), fileUpload(), routerCache(), CORS(), (req: Request, res: Response) => {
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
