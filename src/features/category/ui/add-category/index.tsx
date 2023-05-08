import { Text, ActionIcon } from '@mantine/core'

import { RegularIcon } from '~/shared/icons'

export const AddCategory = () => {
  return (
    <ActionIcon size="auto">
      <RegularIcon icon="PlusSquareIcon" />
      <Text color="accent.5" ml={10}>
        Add
      </Text>
    </ActionIcon>
  )
}
