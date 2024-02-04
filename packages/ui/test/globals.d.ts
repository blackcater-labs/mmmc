import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

import 'vitest/globals'

declare module '@vitest/expect' {
  interface Assertion<T = any> extends TestingLibraryMatchers<T, void> {}
}
