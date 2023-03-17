import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'

const Profile = () => {
  return (
    <>
      <div>Profile</div>
      <NavLink to={ROUTES['/']}>Go to home</NavLink>
    </>
  )
}

export default Profile
