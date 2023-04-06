import { ActionIcon, Button, Popover, Flex } from '@mantine/core'
import { useState } from 'react'

import { FillIcon } from '~/shared/icons'

export const DeleteTask = () => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Popover
        width={200}
        position="bottom"
        withArrow
        shadow="md"
        opened={opened}
        onChange={setOpened}
        withinPortal={true}
      >
        <Popover.Target>
          <ActionIcon title="Delete task" onClick={() => setOpened(true)}>
            <FillIcon icon="TrashIcon" />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Flex gap="sm">
            <Button
              type="button"
              onClick={() => setOpened(false)}
              variant="outline"
            >
              Cancel
            </Button>
            <Button color="danger" type="button">
              Delete
            </Button>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </>
  )
}
