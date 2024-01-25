import type { GraphQLErrorExtensions } from 'graphql'
import type { Maybe } from 'graphql-yoga'
import { GraphQLError } from 'graphql'

export enum MmmcErrorCode {
  /** Common errors */
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  BAD_REQUEST = 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',

  /** Business errors */
  // Auth errors
  AUTH_PASSWORD_NOT_MATCH = 'AUTH_PASSWORD_NOT_MATCH',
  AUTH_UNKNOW_ERROR = 'AUTH_UNKNOW_ERROR',

  // User errors
  USER_ALREADY_EXISTS = 'USER_ALREADY_EXISTS',
  USER_NOT_EXISTS = 'USER_NOT_EXISTS',
}

// Common errors
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
  constructor(message: string = 'Unauthorized', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.UNAUTHORIZED, {
      ...extensions,
      http: {
        status: 401,
        ...extensions?.http,
      },
    })
  }
}

export class ForbiddenMmmcError extends MmmcError {
  constructor(message: string = 'Forbidden', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.FORBIDDEN, {
      ...extensions,
      http: {
        status: 403,
        ...extensions?.http,
      },
    })
  }
}

export class NotFoundMmmcError extends MmmcError {
  constructor(message: string = 'Not found', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.NOT_FOUND, {
      ...extensions,
      http: {
        status: 404,
        ...extensions?.http,
      },
    })
  }
}

export class BadRequestMmmcError extends MmmcError {
  constructor(message: string = 'Bad request', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.BAD_REQUEST, {
      ...extensions,
      http: {
        status: 400,
        ...extensions?.http,
      },
    })
  }
}

export class InternalServerMmmcError extends MmmcError {
  constructor(message: string = 'Internal server error', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.INTERNAL_SERVER_ERROR, {
      ...extensions,
      http: {
        status: 500,
        ...extensions?.http,
      },
    })
  }
}

// Auth errors
export class AuthPasswordNotMatchMmmcError extends MmmcError {
  constructor(message: string = 'Password not match', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.AUTH_PASSWORD_NOT_MATCH, extensions)
  }
}

export class AuthUnknowErrorMmmcError extends MmmcError {
  constructor(message: string = 'Unknow error', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.AUTH_UNKNOW_ERROR, extensions)
  }
}

// User errors
export class UserAlreadyExistsMmmcError extends MmmcError {
  constructor(message: string = 'User already exists', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.USER_ALREADY_EXISTS, extensions)
  }
}

export class UserNotExistsMmmcError extends MmmcError {
  constructor(message: string = 'User not exists', extensions?: Maybe<GraphQLErrorExtensions>) {
    super(message, MmmcErrorCode.USER_NOT_EXISTS, extensions)
  }
}
