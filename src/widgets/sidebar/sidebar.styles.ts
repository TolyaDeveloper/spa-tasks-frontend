import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  sidebar: {
    width: '230px',
    position: 'fixed',
    maxWidth: '100%',
    height: '100%',
    paddingRight: 0,
    top: 0,
    bottom: 0
  },
  categoriesTitle: {
    margin: '60px 0 20px 0'
  }
}))
