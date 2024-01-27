import { createSafeActionClient } from 'next-safe-action'

export const safeAction = createSafeActionClient({
  // async middleware(parsedInput) {}, // TODO: Middleware
  // handleReturnedServerError(err) {} // TODO: Custom error handling
  // handleServerErrorLog(err) {} // TODO: Log
})
