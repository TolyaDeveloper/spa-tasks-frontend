import { ThemeComponent } from '../theme-component.interface'

export const Checkbox: ThemeComponent = {
  styles: theme => ({
    input: {
      border: `1px solid ${theme.colors.accent[5]}`,
      backgroundColor: 'transparent',

      '&:checked': {
        backgroundColor: 'transparent'
      }
    }
  })
}
