import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '~/pages'
import { withProviders } from './providers'

const App = () => (
  <Suspense>
    <RouterProvider router={router} />
  </Suspense>
)

export default withProviders(App)
