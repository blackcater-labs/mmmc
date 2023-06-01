import { createHashRouter } from 'react-router-dom'

export const router = createHashRouter([
  {
    path: '/',
    lazy: () => import('./pages/home/index.tsx'),
  },
])
