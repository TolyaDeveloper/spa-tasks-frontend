import { Tuple, DefaultMantineColor } from '@mantine/core'

type ExtendedCustomColors =
  | 'accent'
  | 'primary-white-theme'
  | 'primary-dark-theme'
  | 'background'
  | 'warning'
  | 'danger'
  | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}
