import { ComponentType, useState } from 'react'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme
} from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/globals'
import { Fonts } from '../styles/fonts'

export const withMantine = (Component: ComponentType) => () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ ...theme, colorScheme }} withGlobalStyles>
        <GlobalStyles />
        <Fonts />
        <Notifications />
        <Component />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
