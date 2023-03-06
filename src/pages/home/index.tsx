import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <NavLink to={ROUTES.profile}>Go to profile</NavLink>
    </>
  )
}

export default Home
