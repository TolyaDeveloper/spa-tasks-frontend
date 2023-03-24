import { ActionIcon, useMantineColorScheme, Text } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'

import { StrokeIcon } from '~/shared/icons'
import { IChangeThemeProps } from './change-theme.props'

export const ThemeSwitch = ({ title, ...props }: IChangeThemeProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const isDark = colorScheme === 'dark'

  useHotkeys([['ctrl+J', () => toggleColorScheme()]])

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="subtle"
      color="accent"
      title="Toggle color scheme"
      size="lg"
      {...props}
    >
      {isDark ? <StrokeIcon icon="SunIcon" /> : <StrokeIcon icon="MoonIcon" />}
      {title && <Text ml="sm">{title}</Text>}
    </ActionIcon>
  )
}
