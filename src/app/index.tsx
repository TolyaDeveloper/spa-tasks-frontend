import { withProviders } from './providers'

import { Title, Button, Text } from '@mantine/core'

const App = () => {
  return (
    <div>
      <Title order={2}>Lol</Title>
      <Text>text</Text>
      <Button size="xs">Lol</Button>
    </div>
  )
}

export default withProviders(App)
