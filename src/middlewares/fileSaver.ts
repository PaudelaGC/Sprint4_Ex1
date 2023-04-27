import { NextFunction, Request, Response } from 'express'
import path from 'path'
/**
 * Saves the file(s) to the files folder if they surpassed the other functions.
 * @returns middleware function
 */
const fileSaver = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const files = req.files as Object

    Object.values(files).forEach(file => {
      const filepath = path.join('./files', file.name)
      file.mv(filepath)
    })
    res.status(200).send('file(s) uploaded successfully')
    next()
  }
}

export default fileSaver
