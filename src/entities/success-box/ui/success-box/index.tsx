import { Flex } from '@mantine/core'

import { BoxWrapper, BoxTitle } from '~/shared/ui'
import { ISuccessBoxProps } from './success-box.props'

export const SuccessBox = ({
  title,
  rightIcon,
  children,
  className
}: ISuccessBoxProps) => {
  return (
    <BoxWrapper className={className}>
      <BoxTitle title={title} rightIcon={rightIcon} />
      <Flex gap="md" justify="space-between" wrap="wrap">
        {children}
      </Flex>
    </BoxWrapper>
  )
}
