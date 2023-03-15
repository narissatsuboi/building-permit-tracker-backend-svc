import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { ThemeProvider } from 'theme-ui'
import { bootstrap } from '@theme-ui/presets'

// pages
import Home from './pages/Home'
import Records, { loader as recordLoader } from './pages/records/Records'

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
            element: <Records />,
            loader: recordLoader,
          },
        ]
      }
    ]
  }
])

function App () {
  return (
    <ThemeProvider theme={ bootstrap }>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
