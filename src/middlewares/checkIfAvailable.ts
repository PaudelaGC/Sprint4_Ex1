import { NextFunction, Request, Response } from 'express'
import readData from '../logic/readData'

const checkIfAvailable = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.name
    const data = readData() as Object[]
    for (const user of data) {
      if (Object.values(user).includes(username, 1) ||
      username.length === 0) {
        return res.status(401).send('This username is not available')
        //Throw an error
      }
    }
    return next()
  }
}

export default checkIfAvailable
