import { Outlet } from 'react-router-dom'
import { Container } from '@mantine/core'

import { DateLabel, TimeLabel } from '~/shared/ui'
import { TimeBox } from '~/entities/time-box'
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
            <TimeBox
              title="So, so, so"
              date={<DateLabel topLabel="Date we got" />}
              time={<TimeLabel topLabel="Time we got" />}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
