import { SimpleGrid } from '@mantine/core'

import { BoxTitle, BoxWrapper } from '~/shared/ui'
import { ITimeBoxProps } from './time-box.props'

export const TimeBox = ({
  className,
  title,
  rightIcon,
  date,
  time
}: ITimeBoxProps) => {
  return (
    <BoxWrapper className={className}>
      <BoxTitle title={title} rightIcon={rightIcon} />
      <SimpleGrid cols={2} spacing="xs">
        {time}
        {date}
      </SimpleGrid>
    </BoxWrapper>
  )
}
