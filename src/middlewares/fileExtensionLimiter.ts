import { NextFunction, Request, Response } from 'express'
import path from 'path'

/**
 * Checks the extension of every file uploaded. If any isn't PNG, JPG or GIF the upload is not successful.
 * @returns middleware function
 */
const fileExtensionLimiter = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Object
    const fileExtensions: string[] = []
    Object.values(files).forEach(file => {
      fileExtensions.push(path.extname(file.name).toUpperCase())
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
