import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import { base } from '@theme-ui/presets'
import router from './router'
function App () {
  return (
    <ThemeProvider theme={base}>
		<RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
