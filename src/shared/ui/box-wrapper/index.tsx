import { IBoxWrapperProps } from './box-wrapper.props'
import { useStyles } from './box-wrapper.styles'

export const BoxWrapper = ({ className, children }: IBoxWrapperProps) => {
  const { classes, cx } = useStyles()

  return <div className={cx(classes.boxWrapper, className)}>{children}</div>
}
