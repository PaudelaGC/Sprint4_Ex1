import { NextFunction, Request, Response } from 'express'
import PORT from './index'

const CORS = () => {
  return (_req: Request, res: Response, next: NextFunction) => {
    res.set({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': `http://localhost:${PORT}/time`,
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    })
    console.log('CORS enabled')

    next()
  }
}

export default CORS
