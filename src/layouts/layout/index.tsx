import { Outlet } from 'react-router-dom'
import { Container } from '@mantine/core'

import { Sidebar } from '~/widgets/sidebar'
import { TopBar } from '~/widgets/top-bar'
import { useStyles } from './layout.styles'

export const Layout = () => {
  const { classes } = useStyles()

  return (
    <Container size={1470}>
      <Sidebar />
      <div className={classes.rightSection}>
        <TopBar className={classes.topBar} />
        <div className={classes.main}>
          <main>
            <Outlet />
          </main>
          <div>
            <div>aside</div>
          </div>
        </div>
      </div>
    </Container>
  )
}
