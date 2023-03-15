import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  boxWrapper: {
    filter: theme.shadows.md,
    borderRadius: theme.radius.lg,
    padding: '20px',
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.colors.background[0]
        : theme.colors.background[9]
  }
}))
