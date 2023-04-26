import { NextFunction, Request, Response } from 'express'

const fileExists = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const files = req.files
    if (files === undefined || files === null) {
      return res.status(404).send('No files were uploaded')
    }

    return next()
  }
}

export default fileExists
