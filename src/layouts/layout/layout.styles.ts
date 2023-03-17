import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
  rightSection: {
    marginLeft: '300px'
  },
  topBar: {
    margin: '20px 0 30px 0'
  },
  main: {
    display: 'grid',
    gridTemplateColumns: '570px 470px',
    gap: '30px'
  }
}))
