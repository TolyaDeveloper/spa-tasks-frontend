import { Flex, Text } from '@mantine/core'

import { StrokeIcon } from '../../icons'
import { getMonth } from '../../lib'
import { IDateLabelProps } from './date-label.props'

export const DateLabel = ({ className, topLabel }: IDateLabelProps) => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return (
    <div className={className}>
      <Text mb="xs" size="sm">
        {topLabel}
      </Text>
      <Flex align="center" gap="sm">
        <StrokeIcon icon="CalendarIcon" />
        <Text size="lg" weight={600} component="time">
          {day} {getMonth(month)} {year}
        </Text>
      </Flex>
    </div>
  )
}
