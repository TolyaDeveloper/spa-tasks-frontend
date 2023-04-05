import { Stack, Checkbox } from '@mantine/core'

import { FillIcon } from '~/shared/icons'
import { BoxTitle, BoxWrapper } from '~/shared/ui'
import { TaskRow } from '~/entities/task'
import { EditTask, DeleteTask } from '~/features/task'

export const TasksBox = () => {
  return (
    <BoxWrapper>
      <BoxTitle title="Active tasks" rightIcon={<FillIcon icon="DotsIcon" />} />
      <Stack spacing="sm" mb={20}>
        <TaskRow
          taskTitle="Some title"
          checkbox={<Checkbox />}
          actions={
            <>
              <EditTask />
              <DeleteTask />
            </>
          }
        />
        <TaskRow taskTitle="Some title 2" />
        <TaskRow taskTitle="Some title 3" />
      </Stack>
      <BoxTitle title="Finished tasks" />
      <Stack spacing="sm">
        <TaskRow taskTitle="Some title" />
        <TaskRow taskTitle="Some title 2" />
        <TaskRow taskTitle="Some title 3" />
      </Stack>
    </BoxWrapper>
  )
}
