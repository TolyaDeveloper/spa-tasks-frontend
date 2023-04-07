import { createStyles, getStylesRef } from '@mantine/core'

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
    borderRadius: theme.radius.lg,
    cursor: 'pointer',

    [`&:hover .${getStylesRef('checkbox')}`]: {
      display: 'block'
    },
    [`&:hover .${getStylesRef('actions')}`]: {
      display: 'flex'
    }
  },
  checkbox: {
    ref: getStylesRef('checkbox'),
    display: 'none',
    marginRight: theme.spacing.sm
  },
  actions: {
    ref: getStylesRef('actions'),
    display: 'none',
    alignItems: 'center'
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center'
  }
}))
