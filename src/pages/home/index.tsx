import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { Logo, BoxWrapper } from '~/shared/ui'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Logo />
      <BoxWrapper>
        <div>Home</div>
      </BoxWrapper>
      <NavLink to={ROUTES.profile}>Go to profile</NavLink>
    </>
  )
}

export default Home
