import { Global } from '@mantine/core'

export const GlobalStyles = () => (
  <Global
    styles={theme => ({
      body: {
        margin: 0,
        minWidth: '320px',
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.black : theme.white,
        color:
          theme.colorScheme === 'dark'
            ? theme.colors['primary-dark-theme'][0]
            : theme.colors['primary-white-theme'][9]
      },
      a: {
        display: 'inline-block',
        color: 'inherit',
        textDecoration: 'none'
      },
      p: {
        margin: 0
      }
    })}
  />
)
