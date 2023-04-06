import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  arrowBox: {
    padding: '6px'
  },
  dropdown: {
    padding: '7.5px 0',
    borderRadius: theme.radius.lg
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12.5px 20px',

    '&:hover': {
      color: theme.colors.accent[5]
    },

    '&:hover svg': {
      stroke: `${theme.colors.accent[5]}!important`
    }
  },
  dropdownItemIcon: {
    marginRight: '10px'
  },
  dropdownButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
  },
  themeSwitch: {
    color: 'unset',

    svg: {
      width: '18px',
      height: '18px'
    }
  },
  premiumText: {
    color: 'unset'
  }
}))
