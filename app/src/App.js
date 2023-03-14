import React from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Outlet
} from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import { theme } from './theme/theme'

// import { base } from '@theme-ui/presets'

// pages
import Home from './pages/Home'
import Record, { loader as recordLoader } from './pages/records/Record'

// layouts
import RootLayout from './layouts/rootLayout'

// react react router dom
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/records',
        // element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Record />,
            loader: recordLoader,
          },
        ]
      }
    ]
  }
])

function App () {
  return (
    <ThemeProvider theme={ theme }>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
