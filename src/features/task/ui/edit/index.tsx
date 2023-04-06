import { ActionIcon, Modal, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { FillIcon } from '~/shared/icons'

export const EditTask = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <ActionIcon title="Edit task" onClick={open}>
        <FillIcon icon="EditIcon" />
      </ActionIcon>
      <Modal
        onClose={close}
        opened={opened}
        title="Edit your task"
        withCloseButton={false}
        overlayProps={{ blur: '3px' }}
      >
        <Button color="danger" type="button" onClick={close}>
          Close
        </Button>
      </Modal>
    </>
  )
}
