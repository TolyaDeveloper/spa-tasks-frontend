import { Skeleton, Flex, Stack } from '@mantine/core'

import { BoxWrapper } from '../../box-wrapper'

export const HomeSkeleton = () => {
  return (
    <Stack>
      <BoxWrapper>
        <Flex justify="space-between" align="center" mb={20}>
          <Skeleton height={40} width="40%" />
          <Skeleton height={10} width={40} />
        </Flex>
        <Flex gap="md" justify="space-between" wrap="wrap">
          <Skeleton height={100} width={100} circle />
          <Skeleton height={100} width={100} circle />
          <Skeleton height={100} width={100} circle />
        </Flex>
      </BoxWrapper>
      <BoxWrapper>
        <Flex justify="space-between" align="center" mb={20}>
          <Skeleton height={40} width="40%" />
          <Skeleton height={10} width={40} />
        </Flex>
        <Stack>
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={40} width="40%" />
          <Skeleton height={20} />
          <Skeleton height={20} />
        </Stack>
      </BoxWrapper>
    </Stack>
  )
}
