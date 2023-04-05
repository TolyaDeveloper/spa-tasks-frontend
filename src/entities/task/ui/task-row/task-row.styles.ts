import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  taskRow: {
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: `1px solid ${
      theme.colorScheme === 'light'
        ? theme.colors['primary-white-theme'][0]
        : theme.fn.rgba(theme.colors['primary-dark-theme'][9], 0.3)
    }`,
    borderRadius: theme.radius.lg
  },
  actions: {
    display: 'flex',
    alignItems: 'center'
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center'
  }
}))
