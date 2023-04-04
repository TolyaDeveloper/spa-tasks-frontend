import { FillIcon } from '~/shared/icons'
import { BoxTitle, BoxWrapper } from '~/shared/ui'

export const TasksBox = () => {
  return (
    <BoxWrapper>
      <BoxTitle title="Active tasks" rightIcon={<FillIcon icon="DotsIcon" />} />
      <BoxTitle title="Finished tasks" />
    </BoxWrapper>
  )
}
