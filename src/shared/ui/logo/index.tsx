import { NavLink } from 'react-router-dom'

import { ROUTES } from '../../config'
import { ReactComponent as LogoIcon } from './logo.svg'
import { ILogoProps } from './logo.props'

export const Logo = ({ className }: ILogoProps) => {
  return (
    <NavLink className={className} to={ROUTES['/']}>
      <LogoIcon />
    </NavLink>
  )
}
