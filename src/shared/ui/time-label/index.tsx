import { useState, useEffect } from 'react'
import { Flex, Text } from '@mantine/core'

import { StrokeIcon } from '../../icons'
import { ITimeLabelProps } from './time-label.props'

export const TimeLabel = ({ className, topLabel }: ITimeLabelProps) => {
  const [time, setTime] = useState<Date>(new Date())

  const refreshTime = () => {
    setTime(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshTime, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <div className={className}>
      <Text mb="xs" size="sm">
        {topLabel}
      </Text>
      <Flex gap="sm" align="center">
        <StrokeIcon icon="ClockIcon" />
        <Text component="time" size="lg" weight={600}>
          {time.toLocaleTimeString()}
        </Text>
      </Flex>
    </div>
  )
}
