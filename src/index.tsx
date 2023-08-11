import React from 'react'
import { createRoot } from 'react-dom/client'

import Hello from './Hello'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(<Hello />)
