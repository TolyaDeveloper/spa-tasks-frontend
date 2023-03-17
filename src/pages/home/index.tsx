import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { Logo, BoxWrapper, HomeSkeleton } from '~/shared/ui'
import { CircleStatus, SuccessBox } from '~/entities/success-box'
import { TimeLabel, DateLabel } from '~/entities/time-box'
import { ThemeSwitch } from '~/features/theme'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Logo />
      <BoxWrapper>
        <div>Home</div>
      </BoxWrapper>
      <SuccessBox title="Some title">
        <CircleStatus count={110} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={140} innerTitle="tasks" outerTitle="made" />
        <CircleStatus count={1} innerTitle="tasks" outerTitle="made" />
      </SuccessBox>
      <NavLink to={ROUTES['/profile']}>Go to profile</NavLink>
      <TimeLabel />
      <DateLabel />
      <ThemeSwitch />
      <HomeSkeleton />
    </>
  )
}

export default Home
