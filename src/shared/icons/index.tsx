import { useMantineColorScheme } from '@mantine/core'

import {
  IFillIconProps,
  IStrokeIconProps,
  IRegularIconProps,
  fillIcons,
  strokeIcons,
  regularIcons
} from './icons.props'

export const StrokeIcon = ({ className, icon }: IStrokeIconProps) => {
  const { colorScheme } = useMantineColorScheme()
  const Icon = strokeIcons[icon]

  return (
    <Icon
      className={className}
      style={{ stroke: colorScheme === 'dark' ? '#f9f9f9' : '#282846' }}
    />
  )
}

export const FillIcon = ({ className, icon }: IFillIconProps) => {
  const { colorScheme } = useMantineColorScheme()
  const Icon = fillIcons[icon]

  return (
    <Icon
      className={className}
      style={{ fill: colorScheme === 'dark' ? '#f9f9f9' : '#282846' }}
    />
  )
}

export const RegularIcon = ({ className, icon }: IRegularIconProps) => {
  const Icon = regularIcons[icon]

  return <Icon className={className} />
}
