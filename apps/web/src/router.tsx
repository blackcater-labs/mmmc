import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('./layouts/DefaultLayout.tsx'),
    children: [
      {
        index: true,
        lazy: () => import('./pages/home/index.tsx'),
      },
    ],
  },
])
