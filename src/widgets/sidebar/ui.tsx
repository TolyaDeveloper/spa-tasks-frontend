import { Title } from '@mantine/core'

import { BoxWrapper, Logo } from '~/shared/ui'
import { ROUTES } from '~/shared/config'
import { CategoryRow } from '~/entities/category'
import { AddCategory } from '~/features/category'
import { ISidebarProps } from './sidebar.props'
import { useStyles } from './sidebar.styles'

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
      <AddCategory />
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
