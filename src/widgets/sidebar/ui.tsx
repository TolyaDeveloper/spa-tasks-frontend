import { BoxWrapper, Logo } from '~/shared/ui'
import { ISidebarProps } from './sidebar.props'
import { useStyles } from './sidebar.styles'

export const Sidebar = ({ className }: ISidebarProps) => {
  const { classes, cx } = useStyles()

  return (
    <BoxWrapper className={cx(classes.sidebar, className)}>
      <Logo />
    </BoxWrapper>
  )
}
