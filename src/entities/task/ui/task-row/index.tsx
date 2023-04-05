import { Text } from '@mantine/core'

import { ITaskRowProps } from './task-row.props'
import { useStyles } from './task-row.styles'

export const TaskRow = ({
  className,
  checkbox,
  actions,
  taskTitle
}: ITaskRowProps) => {
  const { classes, cx } = useStyles()

  return (
    <div className={cx(classes.taskRow, className)}>
      <div className={classes.leftSection}>
        <div>{checkbox}</div>
        <Text ml="sm">{taskTitle}</Text>
      </div>
      <div className={classes.actions}>{actions}</div>
    </div>
  )
}
