import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { Layout } from '~/layouts'
import HomePage from './home'
import ProfilePage from './profile'

export const router = createBrowserRouter([
  {
    path: ROUTES['/'],
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        element: <ProfilePage />,
        path: ROUTES['/profile']
      }
    ]
  }
])
