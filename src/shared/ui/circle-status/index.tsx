import { Text } from '@mantine/core'

import { ICircleStatusProps } from './circle-status.props'
import { useStyles } from './circle-status.styles'

export const CircleStatus = ({
  className,
  count,
  innerTitle,
  outerTitle
}: ICircleStatusProps) => {
  const { classes, cx } = useStyles()

  return (
    <div className={cx(classes.wrapper, className)}>
      <Text size="xs" weight={600} align="center">
        {outerTitle}
      </Text>
      <div className={classes.circle}>
        <Text weight={600} size="xl" color="accent.5">
          {count}
        </Text>
        <Text size="xs" weight={400}>
          {innerTitle}
        </Text>
      </div>
    </div>
  )
}
