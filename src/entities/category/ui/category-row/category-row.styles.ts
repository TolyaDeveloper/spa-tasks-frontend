import { createStyles, getStylesRef } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  categoryRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [`&:hover .${getStylesRef('categoryName')}`]: {
      color: theme.colors.accent[5]
    }
  },
  categoryName: {
    ref: getStylesRef('categoryName'),
    margin: `0 ${theme.spacing.sm} 0 ${theme.spacing.sm}`
  },
  iconWithText: {
    display: 'flex',
    alignItems: 'center'
  },
  rightDecoration: {
    display: 'inline-block',
    flexShrink: 0,
    width: '30px',
    height: '18px',
    borderTopLeftRadius: theme.radius.xl,
    borderBottomLeftRadius: theme.radius.xl,
    backgroundColor: theme.colors.accent[5]
  }
}))
