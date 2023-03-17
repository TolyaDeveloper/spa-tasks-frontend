import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  rightSection: {
    marginLeft: '300px'
  },
  topBar: {
    marginBottom: '30px'
  },
  main: {
    display: 'grid',
    gridTemplateColumns: '570px 470px',
    gap: '30px'
  }
}))
