import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { HomeSkeleton, ProfileSkeleton } from '~/shared/ui'
import { Layout } from '~/layouts'

const HomePage = lazy(() => import('./home'))
const ProfilePage = lazy(() => import('./profile'))

export const router = createBrowserRouter([
  {
    path: ROUTES['/'],
    element: <Layout />,
    children: [
      {
        element: (
          <Suspense fallback={<HomeSkeleton />}>
            <HomePage />
          </Suspense>
        ),
        index: true
      },
      {
        element: (
          <Suspense fallback={<ProfileSkeleton />}>
            <ProfilePage />
          </Suspense>
        ),
        path: ROUTES['/profile']
      }
    ]
  }
])
