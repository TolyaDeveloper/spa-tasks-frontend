import { CircleStatus } from '~/shared/ui'
import { FillIcon } from '~/shared/icons'
import { SuccessBox } from '~/entities/success-box'
import { TasksBox } from '~/widgets/tasks-box'
import { Stack } from '@mantine/core'

const Home = () => {
  return (
    <Stack spacing="xl">
      <SuccessBox title="Some title" rightIcon={<FillIcon icon="DotsIcon" />}>
        <CircleStatus count={110} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={140} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={1} innerTitle="tasks" outerTitle="made" />
      </SuccessBox>
      <TasksBox />
    </Stack>
  )
}

export default Home
