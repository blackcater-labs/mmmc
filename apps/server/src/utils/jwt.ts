import type { SignOptions } from 'jsonwebtoken'

import jwt from 'jsonwebtoken'

import { AuthUnknowErrorMmmcError } from './error'

export interface JWTPayload {
  id: string
  role: string
}

export async function signJWTToken(payload: JWTPayload, secret: string, options?: SignOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn: '1h', ...options }, (err, token) => {
      if (err)
        return reject(new AuthUnknowErrorMmmcError(err.message))
      if (!token)
        return reject(new AuthUnknowErrorMmmcError())
      return resolve(token)
    })
  })
}

export async function verifyJWTToken(token: string, secret: string): Promise<JWTPayload> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err)
        return reject(new AuthUnknowErrorMmmcError(err.message))
      if (!decoded)
        return reject(new AuthUnknowErrorMmmcError())
      return resolve(decoded as JWTPayload)
    })
  })
}
