import { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'

import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/globals'
import { Fonts } from '../styles/fonts'

export const withMantine = (component: () => ReactNode) => () =>
  (
    <MantineProvider theme={theme} withGlobalStyles>
      <GlobalStyles />
      <Fonts />
      {component()}
    </MantineProvider>
  )
