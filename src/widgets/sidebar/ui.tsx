import { Title } from '@mantine/core'

import { BoxWrapper, Logo } from '~/shared/ui'
import { CategoryRow } from '~/entities/category'
import { ISidebarProps } from './sidebar.props'
import { useStyles } from './sidebar.styles'
import { ROUTES } from '~/shared/config'

export const Sidebar = ({ className }: ISidebarProps) => {
  const { classes, cx } = useStyles()

  return (
    <BoxWrapper className={cx(classes.sidebar, className)}>
      <Logo />
      <Title color="accent" size="h2" className={classes.categoriesTitle}>
        Categories
      </Title>
      <CategoryRow
        iconLeft={<div>Icon</div>}
        link={ROUTES['/']}
        name="Category name"
      />
      <CategoryRow
        iconLeft={<div>Icon</div>}
        link={ROUTES['/']}
        name="Category name"
      />
      <CategoryRow
        iconLeft={<div>Icon</div>}
        link={ROUTES['/']}
        name="Category name"
      />
      <Title color="accent" size="h2" className={classes.categoriesTitle}>
        Data
      </Title>
      <CategoryRow
        iconLeft={<div>Icon</div>}
        link={ROUTES['/']}
        name="Statistics"
      />
      <CategoryRow
        iconLeft={<div>Icon</div>}
        link={ROUTES['/']}
        name="Compare"
      />
    </BoxWrapper>
  )
}
