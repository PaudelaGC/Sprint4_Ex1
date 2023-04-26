import { NextFunction, Request, Response } from 'express'
import path from 'path'

const fileExtensionLimiter = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Object
    const fileExtensions: string[] = []
    Object.values(files).forEach(key => {
      fileExtensions.push(path.extname(key.name).toUpperCase())
    })
    const allowedExtensions = ['.PNG', '.JPG', '.GIF']
    const allowed = fileExtensions.every(ext => allowedExtensions.includes(ext))

    if (!allowed) {
      return res.status(422).send('One or more files have an invalid extension')
    }

    return next()
  }
}

export default fileExtensionLimiter
