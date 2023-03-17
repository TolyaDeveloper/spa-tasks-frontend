import { Skeleton, SimpleGrid, Stack } from '@mantine/core'

import { BoxWrapper } from '../../box-wrapper'

export const ProfileSkeleton = () => {
  return (
    <BoxWrapper>
      <SimpleGrid cols={2}>
        <Skeleton width={50} height={50} circle />
        <Stack>
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
        </Stack>
      </SimpleGrid>
    </BoxWrapper>
  )
}
