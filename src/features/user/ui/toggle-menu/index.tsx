import { Text, Flex, Avatar, ActionIcon, Popover } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { NavLink } from 'react-router-dom'

import { ROUTES } from '~/shared/config'
import { RegularIcon, StrokeIcon } from '~/shared/icons'
import { BoxWrapper } from '~/shared/ui'
import { useStyles } from './toggle-menu.styles'
import { ThemeSwitch } from '../change-theme'

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
              <RegularIcon icon="ArrowIcon" />
            </BoxWrapper>
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown className={classes.dropdown}>
          <NavLink to={ROUTES['/profile']} className={classes.dropdownItem}>
            <StrokeIcon className={classes.dropdownItemIcon} icon="UserIcon" />
            Account
          </NavLink>
          <ThemeSwitch
            className={cx(classes.dropdownItem, classes.themeSwitch)}
            variant="transparent"
            title="Toggle theme"
            size="auto"
          />
          <NavLink to={ROUTES['/profile']} className={classes.dropdownItem}>
            <StrokeIcon
              className={classes.dropdownItemIcon}
              icon="SettingsIcon"
            />
            Settings
          </NavLink>
          <ActionIcon
            className={cx(classes.dropdownItem, classes.premiumText)}
            size="auto"
            onClick={openPremiumWarning}
            variant="transparent"
          >
            <RegularIcon
              className={classes.dropdownItemIcon}
              icon="PremiumStarIcon"
            />
            <Text>Premium</Text>
          </ActionIcon>
          <NavLink to={ROUTES['/profile']} className={classes.dropdownItem}>
            <StrokeIcon
              className={classes.dropdownItemIcon}
              icon="LogoutIcon"
            />
            Log out
          </NavLink>
        </Popover.Dropdown>
      </Popover>
    </Flex>
  )
}
