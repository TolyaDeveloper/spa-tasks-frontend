import { Text } from '@mantine/core'

import { BoxTitle, BoxWrapper } from '~/shared/ui'
import { IPerformanceChartProps } from './performance-chart.props'

export const PerformanceChart = ({
  className,
  title,
  rightIcon
}: IPerformanceChartProps) => {
  return (
    <BoxWrapper className={className}>
      <BoxTitle title={title} rightIcon={rightIcon} />
      <Text size="sm">Chart here</Text>
    </BoxWrapper>
  )
}
