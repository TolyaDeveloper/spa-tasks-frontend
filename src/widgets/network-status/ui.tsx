import { notifications } from '@mantine/notifications'
import { useNetwork } from '@mantine/hooks'
import { useEffect } from 'react'

import { NETWORK_STATUS } from './config/constants'

export const NetworkStatus = () => {
  const networkStatus = useNetwork()

  useEffect(() => {
    if (!networkStatus.online) {
      return notifications.show({
        id: NETWORK_STATUS,
        message: 'You are offline!',
        color: 'danger.5',
        autoClose: false,
        withCloseButton: false
      })
    }

    return notifications.hide(NETWORK_STATUS)
  }, [networkStatus.online])

  return <></>
}
