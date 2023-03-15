import { Flex, Title } from '@mantine/core'

import { IBoxTitleProps } from './box-title.props'

export const BoxTitle = ({ title, rightIcon }: IBoxTitleProps) => {
  return (
    <Flex justify="space-between" align="center" mb={20}>
      <Title>{title}</Title>
      {rightIcon && rightIcon}
    </Flex>
  )
}
