import { Flex } from '@mantine/core'

import { BoxWrapper, BoxTitle } from '~/shared/ui'
import { CircleStatus } from '../circle-status'
import { ISuccessBoxProps } from './success-box.props'

export const SuccessBox = ({ title, rightIcon }: ISuccessBoxProps) => {
  return (
    <BoxWrapper>
      <BoxTitle title={title} rightIcon={rightIcon} />
      <Flex gap="md" justify="space-between" wrap="wrap">
        <CircleStatus count={110} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={140} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={1} innerTitle="tasks" outerTitle="made" />
      </Flex>
    </BoxWrapper>
  )
}
