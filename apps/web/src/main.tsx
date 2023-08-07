import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from './router.tsx'

import 'virtual:uno.css'
import 'virtual:unocss-devtools'
import '@unocss/reset/tailwind-compat.css'
import './assets/fonts/index.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
