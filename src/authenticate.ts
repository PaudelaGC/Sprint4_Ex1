import { NextFunction, Request, Response } from 'express'

const authenticate = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    // If 'Authorization' header not present
    try {
      if (req.get('Authorization') === undefined) {
        throw new Error('Not Authentification Configured!!')
      }
      // If 'Authorization' header present
      // Decode the 'Authorization' header Base64 value
      const auth = req.get('Authorization') as string
      const credentials = auth
        .split(':')
      // ['username', 'password']

      const username = credentials[0]
      const password = credentials[1]
      // If credentials are not valid
      if (!(username === 'Paudelagisi' && password === 'contrasenyapau')) {
        throw new Error('Not Authenticated Properly!')
      }
      // Continue the execution
      res.status(200)
      return next()
    } catch (error: any) {
      console.log(error)
      return res.status(401).set('WWW-Authenticate', 'Basic').send(error.message)
    }
  }
}

export default authenticate
