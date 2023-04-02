import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { HomeSkeleton, CircleStatus, TimeLabel, DateLabel } from '~/shared/ui'
import { FillIcon } from '~/shared/icons'
import { SuccessBox } from '~/entities/success-box'

const Home = () => {
  return (
    <>
      <SuccessBox title="Some title" rightIcon={<FillIcon icon="DotsIcon" />}>
        <CircleStatus count={110} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={140} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={1} innerTitle="tasks" outerTitle="made" />
      </SuccessBox>
      <NavLink to={ROUTES['/profile']}>Go to profile</NavLink>
      <TimeLabel />
      <DateLabel />
      <HomeSkeleton />
    </>
  )
}

export default Home
