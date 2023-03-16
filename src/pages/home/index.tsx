import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { Logo, BoxWrapper } from '~/shared/ui'
import { SuccessBox } from '~/entities/success-box'
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
      <SuccessBox title="Some title" />
      <NavLink to={ROUTES['/profile']}>Go to profile</NavLink>
      <TimeLabel />
      <DateLabel />
      <ThemeSwitch />
    </>
  )
}

export default Home
