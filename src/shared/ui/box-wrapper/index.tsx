import { Box } from '@mantine/core'

import { IBoxWrapperProps } from './box-wrapper.props'
import { useStyles } from './box-wrapper.styles'

export const BoxWrapper = ({ children, className }: IBoxWrapperProps) => {
  const { classes, cx } = useStyles()

  return <Box className={cx(classes.boxWrapper, className)}>{children}</Box>
}
