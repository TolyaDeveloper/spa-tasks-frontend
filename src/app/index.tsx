import { RouterProvider } from 'react-router-dom'

import { router } from '~/pages'
import { withProviders } from './providers'
import { NetworkStatus } from '~/widgets/network-status'

const App = () => (
  <>
    <RouterProvider router={router} />
    <NetworkStatus />
  </>
)

export default withProviders(App)
