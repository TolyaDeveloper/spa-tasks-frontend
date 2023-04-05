import { Text } from '@mantine/core'

import { BoxTitle, BoxWrapper } from '~/shared/ui'
import { ICompletionFrequencyBoxProps } from './completion-frequency-box.props'

export const CompletionFrequencyBox = ({
  className,
  title,
  rightIcon
}: ICompletionFrequencyBoxProps) => {
  return (
    <BoxWrapper className={className}>
      <BoxTitle title={title} rightIcon={rightIcon} />
      <Text size="sm">Mostly tasks are created on:</Text>
      <Text size="sm">Mostly tasks are done on:</Text>
    </BoxWrapper>
  )
}
