import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import theme from './themes/theme'
import { ThemeProvider } from '@mui/material/styles'

// pages
import ErrorPage from './pages/ErrorPage.jsx'
import Index from './pages/LandingPage'
import Records, { loader as recordLoader } from './pages/records/RecordsPage'

// layouts
import RootLayout from './layouts/RootLayout'

// react react router dom
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: '/records/dev',
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
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
