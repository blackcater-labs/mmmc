import React from 'react'
import ReactDOM from 'react-dom/client'

import { Providers } from './Providers'
import './i18n'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
)
