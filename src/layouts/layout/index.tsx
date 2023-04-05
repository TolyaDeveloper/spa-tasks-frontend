import { Outlet } from 'react-router-dom'
import { Container, Stack } from '@mantine/core'

import { DateLabel, TimeLabel } from '~/shared/ui'
import { TimeBox } from '~/entities/time-box'
import { CompletionFrequencyBox } from '~/entities/completion-frequency-box'
import { FactsBox } from '~/entities/facts-box'
import { PerformanceChart } from '~/entities/performance-chart'
import { Sidebar } from '~/widgets/sidebar'
import { TopBar } from '~/widgets/top-bar'
import { useStyles } from './layout.styles'

export const Layout = () => {
  const { classes } = useStyles()

  return (
    <Container size={1400}>
      <Sidebar />
      <div className={classes.rightSection}>
        <TopBar className={classes.topBar} />
        <div className={classes.main}>
          <main>
            <Outlet />
          </main>
          <Stack spacing="xl">
            <TimeBox
              title="So, so, so"
              date={<DateLabel topLabel="Date we got" />}
              time={<TimeLabel topLabel="Time we got" />}
            />
            <CompletionFrequencyBox title="Completion" />
            <FactsBox title="Fact of the day" />
            <PerformanceChart title="Performance chart" />
          </Stack>
        </div>
      </div>
    </Container>
  )
}
