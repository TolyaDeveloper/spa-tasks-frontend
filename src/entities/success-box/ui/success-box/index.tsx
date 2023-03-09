import { Title, Flex } from '@mantine/core'

import { BoxWrapper } from '~/shared/ui'
import { ReactComponent as DotsIcon } from '~/shared/icons/dots.svg'
import { CircleStatus } from '../circle-status'
import { ISuccessBoxProps } from './success-box.props'

export const SuccessBox = ({ title }: ISuccessBoxProps) => {
  return (
    <BoxWrapper>
      <Flex justify="space-between" align="center">
        <Title order={2}>{title}</Title>
        <DotsIcon />
      </Flex>
      <Flex gap="md" justify="space-between" wrap="wrap">
        <CircleStatus count={110} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={140} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={1} innerTitle="tasks" outerTitle="made" />
      </Flex>
    </BoxWrapper>
  )
}
