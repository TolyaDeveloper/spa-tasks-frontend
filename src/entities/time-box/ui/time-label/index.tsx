import { useState, useEffect } from 'react'
import { Flex, Text } from '@mantine/core'

import { StrokeIcon } from '~/shared/icons'

export const TimeLabel = () => {
  const [time, setTime] = useState<Date>(new Date())

  const refreshTime = () => {
    setTime(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshTime, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <Flex gap="sm" align="center">
      <StrokeIcon icon="ClockIcon" />
      <Text component="time" size="lg" weight={600}>
        {time.toLocaleTimeString()}
      </Text>
    </Flex>
  )
}
