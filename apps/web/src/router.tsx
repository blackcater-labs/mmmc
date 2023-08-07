import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('./layouts/DefaultLayout.tsx'),
    children: [
      // Home
      {
        index: true,
        lazy: () => import('./pages/home/index.tsx'),
      },
      // Comics
      {
        path: '/comics',
        lazy: () => import('./pages/comic/index.tsx'),
      },
      // History
      {
        path: '/user/history',
        lazy: () => import('./pages/user/history/index.tsx'),
      },
      // Collections
      {
        path: '/user/collections',
        lazy: () => import('./pages/user/collection/index.tsx'),
      },
      // Comic Detail
      {
        path: '/comics/:comicId',
        lazy: () => import('./pages/comic/detail/index.tsx'),
      },
      // Reading Comic's Chapter
      {
        path: '/comics/:comicId/:chapterId',
        lazy: () => import('./pages/comic/chapter/index.tsx'),
      },
    ],
  },
])
