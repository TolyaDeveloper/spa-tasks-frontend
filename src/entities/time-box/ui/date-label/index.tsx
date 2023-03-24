import { Flex, Text } from '@mantine/core'

import { StrokeIcon } from '~/shared/icons'
import { getMonth } from '../../lib/month-mapper'

export const DateLabel = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return (
    <Flex align="center" gap="sm">
      <StrokeIcon icon="CalendarIcon" />
      <Text size="lg" weight={600} component="time">
        {day} {getMonth(month)} {year}
      </Text>
    </Flex>
  )
}
