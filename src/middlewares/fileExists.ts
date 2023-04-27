import { NextFunction, Request, Response } from 'express'

/**
 * Checks if there was any file uploaded in the body.
 * @returns middleware function
 */
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
