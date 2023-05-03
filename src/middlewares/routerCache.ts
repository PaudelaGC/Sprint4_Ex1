import { NextFunction, Request, Response } from 'express'

const noCache = () => {
  return (_req: Request, res: Response, next: NextFunction) => {
    res.set({
      'Cache-Control': 'no-cache'
    })
    console.log('no-cache option enabled')

    next()
  }
}

export default noCache
