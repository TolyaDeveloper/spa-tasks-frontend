import { Dialog, Notification } from '@mantine/core'
import { useDisclosure, useNetwork } from '@mantine/hooks'
import { useEffect } from 'react'

// ? Todo

export const NetworkStatus = () => {
  const [opened, { close, open }] = useDisclosure(false)
  const networkStatus = useNetwork()

  useEffect(() => {
    if (!networkStatus.online) {
      return open()
    }

    if (opened && networkStatus.online) {
      return close()
    }
  }, [networkStatus.online])

  return (
    <Dialog
      opened={opened}
      size="lg"
      radius="md"
      position={{ left: '20px', bottom: '20px' }}
    >
      <Notification
        title="You're offline!"
        color="danger.4"
        withCloseButton={false}
      />
    </Dialog>
  )
}
