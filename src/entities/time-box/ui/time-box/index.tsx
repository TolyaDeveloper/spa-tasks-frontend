import { SimpleGrid } from '@mantine/core'
import { BoxTitle, BoxWrapper } from '~/shared/ui'

import { DateLabel } from '../date-label'
import { TimeLabel } from '../time-label'
import { ITimeBoxProps } from './time-box.props'

export const TimeBox = ({ title }: ITimeBoxProps) => {
  return (
    <BoxWrapper>
      <BoxTitle title={title} />
      <SimpleGrid cols={2} spacing="xs">
        <TimeLabel />
        <DateLabel />
      </SimpleGrid>
    </BoxWrapper>
  )
}
