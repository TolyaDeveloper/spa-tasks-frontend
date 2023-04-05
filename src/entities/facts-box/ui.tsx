import { Text } from '@mantine/core'

import { BoxTitle, BoxWrapper } from '~/shared/ui'
import { IFactsBoxProps } from './facts-box.props'

export const FactsBox = ({ className, title, rightIcon }: IFactsBoxProps) => {
  return (
    <BoxWrapper className={className}>
      <BoxTitle title={title} rightIcon={rightIcon} />
      <Text size="sm">Fact here</Text>
    </BoxWrapper>
  )
}
