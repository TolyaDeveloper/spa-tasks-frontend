import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  wrapper: {
    width: '100px'
  },
  circle: {
    width: '100px',
    height: '100px',
    marginTop: theme.spacing.sm,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: `1px solid ${theme.colors.accent[5]}`,
    borderRadius: '50%'
  }
}))
