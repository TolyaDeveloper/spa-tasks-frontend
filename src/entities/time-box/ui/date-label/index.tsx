import { Flex, Text } from '@mantine/core'

import { ReactComponent as CalendarIcon } from '~/shared/icons/calendar.svg'
import { getMonth } from '../../lib/month-mapper'

export const DateLabel = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  return (
    <Flex align="center" gap="sm">
      <CalendarIcon />
      <Text size="lg" weight={600} component="time">
        {day} {getMonth(month)} {year}
      </Text>
    </Flex>
  )
}
