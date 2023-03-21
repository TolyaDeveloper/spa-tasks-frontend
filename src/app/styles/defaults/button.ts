import { ThemeComponent } from '../theme-component.interface'

export const Button: ThemeComponent = {
  sizes: {
    md: () => ({
      root: {
        height: '42px',
        padding: '0 25px'
      }
    })
  },
  styles: () => ({
    leftIcon: {
      marginRight: '10px'
    }
  })
}
