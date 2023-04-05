import { ActionIcon } from '@mantine/core'

import { FillIcon } from '~/shared/icons'

export const DeleteTask = () => {
  return (
    <ActionIcon title="Delete task">
      <FillIcon icon="TrashIcon" />
    </ActionIcon>
  )
}
