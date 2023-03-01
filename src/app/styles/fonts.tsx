import { Global } from '@mantine/core'

import lightwoff from '../fonts/nunito-v25-cyrillic_latin-300.woff'
import lightwoff2 from '../fonts/nunito-v25-cyrillic_latin-300.woff2'

import regularwoff from '../fonts/nunito-v25-cyrillic_latin-regular.woff'
import regularwoff2 from '../fonts/nunito-v25-cyrillic_latin-regular.woff2'

import semiboldwoff from '../fonts/nunito-v25-cyrillic_latin-600.woff'
import semiboldwoff2 from '../fonts/nunito-v25-cyrillic_latin-600.woff2'

export const Fonts = () => (
  <Global
    styles={[
      {
        '@font-face': {
          fontFamily: 'Nunito',
          src: `url('${lightwoff2}') format("woff2"), url('${lightwoff}') format("woff")`,
          fontWeight: 300,
          fontStyle: 'normal',
          fontDisplay: 'swap'
        }
      },
      {
        '@font-face': {
          fontFamily: 'Nunito',
          src: `url('${regularwoff2}') format("woff2"), url('${regularwoff}') format("woff")`,
          fontWeight: 400,
          fontStyle: 'normal',
          fontDisplay: 'swap'
        }
      },
      {
        '@font-face': {
          fontFamily: 'Nunito',
          src: `url('${semiboldwoff2}') format("woff2"), url('${semiboldwoff}') format("woff")`,
          fontWeight: 600,
          fontStyle: 'normal',
          fontDisplay: 'swap'
        }
      }
    ]}
  />
)
