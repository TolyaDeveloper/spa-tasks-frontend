import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { Logo, BoxWrapper } from '~/shared/ui'
import { SuccessBox } from '~/entities/success-box'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Logo />
      <BoxWrapper>
        <div>Home</div>
      </BoxWrapper>
      <SuccessBox title="Some title" />
      <NavLink to={ROUTES.profile}>Go to profile</NavLink>
    </>
  )
}

export default Home
