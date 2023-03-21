import { Text, Flex, Avatar, ActionIcon, Popover, Button } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { ReactComponent as ArrowIcon } from '~/shared/icons/arrow.svg'
import { ReactComponent as UserIcon } from '~/shared/icons/user.svg'
import { ReactComponent as SettingsIcon } from '~/shared/icons/settings.svg'
import { ReactComponent as LogoutIcon } from '~/shared/icons/log-out.svg'
import { ReactComponent as PremiumStarIcon } from '~/shared/icons/premium-star.svg'
import { BoxWrapper } from '~/shared/ui'
import { useStyles } from './toggle-menu.styles'

export const ToggleMenu = () => {
  const { classes, cx } = useStyles()

  const openPremiumWarning = () => {
    notifications.show({
      title: 'Premium warning',
      message: 'Premium currently is not available',
      color: 'warning'
    })
  }

  return (
    <Flex align="center" gap={15}>
      <Text weight={600}>How is going, Name</Text>
      <Avatar w="44px" h="44px" />
      <Popover>
        <Popover.Target>
          <ActionIcon size="auto" title="Open toggle menu">
            <BoxWrapper className={classes.arrowBox}>
              <ArrowIcon />
            </BoxWrapper>
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown className={classes.dropdown}>
          <NavLink to={ROUTES['/profile']} className={classes.dropdownItem}>
            <UserIcon className={classes.dropdownItemIcon} />
            Account
          </NavLink>
          <NavLink to={ROUTES['/profile']} className={classes.dropdownItem}>
            <SettingsIcon className={classes.dropdownItemIcon} />
            Settings
          </NavLink>
          <button
            className={cx(classes.dropdownItem, classes.dropdownButton)}
            onClick={openPremiumWarning}
          >
            <PremiumStarIcon className={classes.dropdownItemIcon} />
            Premium
          </button>
          <NavLink to={ROUTES['/profile']} className={classes.dropdownItem}>
            <LogoutIcon className={classes.dropdownItemIcon} />
            Log out
          </NavLink>
        </Popover.Dropdown>
      </Popover>
    </Flex>
  )
}
