import { NextFunction, Request, Response } from 'express'
import path from 'path'

const fileSaver = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Object

    Object.values(files).forEach(key => {
      const filepath = path.join('./files', key.name)
      key.mv(filepath)
    })
    res.status(200).send('file(s) uploaded successfully')
    next()
  }
}

export default fileSaver
