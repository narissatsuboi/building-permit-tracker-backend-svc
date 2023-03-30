import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import theme from './themes/theme'
import { ThemeProvider } from '@mui/material/styles'

// pages
import Home from './pages/LandingPage'
import Records, { loader as recordLoader } from './pages/records/RecordsPage'

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
        path: '/records/dev',
        // element: <RootLayout />,
        children: [
          {
            index: true,
            element: <Records />,
            loader: recordLoader
          }
        ]
      }
    ]
  }
])

function App () {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
