// rrd imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout'

// pages
import Home from './pages/Home'

export default function App() {
  const roots = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ])

  return <RouterProvider router={roots} />
}
