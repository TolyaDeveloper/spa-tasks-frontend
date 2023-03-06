import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '~/shared/config'

const HomePage = lazy(() => import('./home'))
const ProfilePage = lazy(() => import('./profile'))

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />
  },
  {
    path: ROUTES.profile,
    element: <ProfilePage />
  }
])
