import { SimpleGrid, Center } from '@mantine/core'

import { AddNewTask } from '~/features/task'
import { ToggleMenu, ThemeSwitch } from '~/features/user'
import { ITopBarProps } from './top-bar.props'

export const TopBar = ({ className }: ITopBarProps) => {
  return (
    <SimpleGrid className={className} cols={3}>
      <div>
        <AddNewTask />
      </div>
      <Center>
        <ThemeSwitch />
      </Center>
      <Center ml="auto">
        <ToggleMenu />
      </Center>
    </SimpleGrid>
  )
}
