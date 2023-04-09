import { Text } from '@mantine/core'
import { NavLink, useMatch } from 'react-router-dom'

import { ICategoryRowProps } from './category-row.props'
import { useStyles } from './category-row.styles'

export const CategoryRow = ({
  className,
  name,
  link,
  iconLeft
}: ICategoryRowProps) => {
  const { classes, cx } = useStyles()
  const match = useMatch(link)

  return (
    <NavLink to={link} className={cx(classes.categoryRow, className)}>
      <div className={classes.iconWithText}>
        {iconLeft}
        <Text className={classes.categoryName}>{name}</Text>
      </div>
      {match && <span className={classes.rightDecoration} />}
    </NavLink>
  )
}
