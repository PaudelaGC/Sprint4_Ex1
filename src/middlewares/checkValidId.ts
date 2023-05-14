import { NextFunction, Request, Response } from 'express'
import readData from '../middlewares/readData'

const checkValidId = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id)
    const data = readData() as any[]
    if (req.method === 'PUT') {
      if (id === 0 || id >= data.length) {
        res.status(401).send('Provided id is not valid (either non-existing or anonymous)')
      } else {
        return next()
      }
    } else if (id >= data.length) {
      res.status(401).send('Provided id is not valid (non-existing)')
    } else {
      return next()
    }
  }
}

export default checkValidId
