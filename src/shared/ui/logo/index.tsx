import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { ReactComponent as LogoIcon } from './logo.svg'

export const Logo = () => {
  return (
    <NavLink to={ROUTES['/']}>
      <LogoIcon />
    </NavLink>
  )
}
