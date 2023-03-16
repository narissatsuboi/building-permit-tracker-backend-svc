import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

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
            loader: recordLoader,
          },
        ]
      }
    ]
  }
])

function App () {
  return (

    <RouterProvider router={router} />

  )
}

export default App
