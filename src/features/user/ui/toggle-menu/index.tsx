import { Text, Flex, Avatar, ActionIcon, Popover, Stack } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '~/shared/config'

import { ReactComponent as ArrowIcon } from '~/shared/icons/arrow.svg'
import { BoxWrapper } from '~/shared/ui'
import { useStyles } from './toggle-menu.styles'

export const ToggleMenu = () => {
  const { classes } = useStyles()

  return (
    <Flex align="center" gap={20}>
      <Text weight={600}>How is going, Name</Text>
      <Popover>
        <Popover.Target>
          <ActionIcon size="auto" title="Open toggle menu">
            <Avatar />
            <BoxWrapper className={classes.arrowBox}>
              <ArrowIcon />
            </BoxWrapper>
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Stack>
            <NavLink to={ROUTES['/profile']}>Profile</NavLink>
          </Stack>
        </Popover.Dropdown>
      </Popover>
    </Flex>
  )
}
