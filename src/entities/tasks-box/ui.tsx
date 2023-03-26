import { BoxWrapper, BoxTitle } from '~/shared/ui'
import { FillIcon } from '~/shared/icons'

export const TasksBox = () => {
  return (
    <BoxWrapper>
      <BoxTitle title="Active tasks" rightIcon={<FillIcon icon="DotsIcon" />} />
      <BoxTitle title="Finished tasks" />
    </BoxWrapper>
  )
}
