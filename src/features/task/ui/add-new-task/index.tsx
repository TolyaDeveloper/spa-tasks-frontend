import { useDisclosure } from '@mantine/hooks'
import { Button, Modal } from '@mantine/core'

import { ReactComponent as AddTaskIcon } from '~/shared/icons/add-task.svg'

export const AddNewTask = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Button leftIcon={<AddTaskIcon />} onClick={open} size="md">
        New Task
      </Button>
      <Modal
        onClose={close}
        opened={opened}
        overlayProps={{ blur: '3px' }}
        withCloseButton={false}
      >
        Content
        <Button color="danger" onClick={close}>
          Cancel
        </Button>
      </Modal>
    </>
  )
}
