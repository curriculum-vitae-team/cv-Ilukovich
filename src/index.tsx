import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Authentication } from './Authentication'
import './assets/css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <Authentication />
  </React.StrictMode>
)
