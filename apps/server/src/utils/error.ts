import type { GraphQLErrorExtensions } from 'graphql'
import type { Maybe } from 'graphql-yoga'
import { GraphQLError } from 'graphql'

export enum MmmcErrorCode {
  // Common errors
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',

  // Business errors
}

export class MmmcError extends GraphQLError {
  constructor(message: string, code: MmmcErrorCode, extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, {
      extensions: {
        code,
        ...extensions,
      },
    })
  }
}

export class UnauthorizedMmmcError extends MmmcError {
  constructor(message: string, extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.UNAUTHORIZED, extensions)
  }
}

export class ForbiddenMmmcError extends MmmcError {
  constructor(message: string, extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.FORBIDDEN, extensions)
  }
}

export class NotFoundMmmcError extends MmmcError {
  constructor(message: string, extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.NOT_FOUND, extensions)
  }
}

export class BadRequestMmmcError extends MmmcError {
  constructor(message: string, extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.BAD_REQUEST, extensions)
  }
}

export class InternalServerMmmcError extends MmmcError {
  constructor(message: string, extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.INTERNAL_SERVER_ERROR, extensions)
  }
}
