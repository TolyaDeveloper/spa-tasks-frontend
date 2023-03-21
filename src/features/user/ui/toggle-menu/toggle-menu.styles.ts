import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  arrowBox: {
    padding: '6px'
  },
  dropdown: {
    padding: '7.5px 0',
    borderRadius: theme.radius.lg,
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.colors.background[0]
        : theme.colors.background[9]
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12.5px 20px',

    '&:hover': {
      opacity: 0.7
    }
  },
  dropdownItemIcon: {
    marginRight: '10px'
  },
  dropdownButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  }
}))
