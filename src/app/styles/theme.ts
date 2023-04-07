import { MantineThemeOverride } from '@mantine/core'

import { Text } from './defaults/text'
import { Popover } from './defaults/popover'
import { Button } from './defaults/button'
import { Checkbox } from './defaults/checkbox'

export const theme: MantineThemeOverride = {
  respectReducedMotion: true,
  cursorType: 'pointer',
  lineHeight: 1.5,
  fontFamily: 'Nunito, sans-serif',
  white: '#fafafa',
  black: '#222831',
  activeStyles: { transform: 'scale(0.95)' },
  shadows: {
    md: 'drop-shadow(0px 10px 25px rgba(29, 52, 54, 0.08))'
  },
  radius: { xs: '4px', sm: '5px', md: '8px', lg: '10px' },
  fontSizes: { xs: '12px', sm: '14px', md: '16px', lg: '25px', xl: '36px' },
  headings: {
    fontFamily: 'Nunito, sans-serif',
    sizes: {
      h2: { fontSize: '24px', fontWeight: 600, lineHeight: '33px' },
      h3: { fontSize: '18px', fontWeight: 600, lineHeight: '25px' }
    }
  },
  spacing: { xs: '5px', sm: '10px', md: '15px', lg: '25px', xl: '30px' },
  primaryColor: 'accent',
  primaryShade: 5,
  components: {
    Text,
    Popover,
    Button,
    Checkbox
  },
  colors: {
    accent: [
      '#ecf6f5',
      '#c6e3e0',
      '#a0d0cc',
      '#77bdb9',
      '#49aaa6',
      '#29a19c',
      '#228b87',
      '#1c7673',
      '#15625f',
      '#0f4e4c'
    ],
    'primary-dark-theme': [
      '#f9f9f9',
      '#ececec',
      '#e0e0e0',
      '#d3d3d3',
      '#c7c7c7',
      '#bbbbbb',
      '#afafaf',
      '#a3a3a3',
      '#979797',
      '#8b8b8b'
    ],
    'primary-white-theme': [
      '#e7e7eb',
      '#cfd0d8',
      '#b8b9c4',
      '#a1a2b1',
      '#8b8c9f',
      '#76778c',
      '#61627a',
      '#4d4e68',
      '#3a3b57',
      '#282846'
    ],
    background: [
      '#fff',
      '#e7e9ea',
      '#babdc1',
      '#a4a8ae',
      '#8e939a',
      '#797f87',
      '#656b75',
      '#515863',
      '#3e4651',
      '#2c3440'
    ],
    danger: [
      '#ffefed',
      '#ffcfcb',
      '#ffafa8',
      '#fb8d87',
      '#f46865',
      '#f05454',
      '#d14848',
      '#b23c3c',
      '#953131',
      '#782626'
    ],
    warning: [
      '#fdfaf2',
      '#f9efd7',
      '#f6e5bd',
      '#f2daa1',
      '#eecf84',
      '#ecca75',
      '#cdaf65',
      '#af9555',
      '#927c46',
      '#766437'
    ]
  }
}
