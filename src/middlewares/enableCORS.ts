import { NextFunction, Request, Response } from 'express'

const CORS = () => {
  return (_req: Request, res: Response, next: NextFunction) => {
    res.set({
      'Access-Control-Allow-Headers': 'Content-Type',
      // Tested and working: server can be accessed with axios from a different project
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    })
    console.log('CORS enabled')

    next()
  }
}

export default CORS
