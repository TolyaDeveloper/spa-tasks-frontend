import { RouterProvider } from 'react-router-dom'

import { router } from '~/pages'
import { withProviders } from './providers'

const App = () => <RouterProvider router={router} />

export default withProviders(App)
