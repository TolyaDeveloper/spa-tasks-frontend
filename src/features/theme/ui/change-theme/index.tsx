import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'

import { ReactComponent as MoonIcon } from '~/shared/icons/moon.svg'
import { ReactComponent as SunIcon } from '~/shared/icons/sun.svg'

export const ThemeSwitch = () => {
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
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </ActionIcon>
  )
}
