import { ActionIcon } from '@mantine/core'

import { FillIcon } from '~/shared/icons'

export const EditTask = () => {
  return (
    <ActionIcon title="Edit task">
      <FillIcon icon="EditIcon" />
    </ActionIcon>
  )
}
