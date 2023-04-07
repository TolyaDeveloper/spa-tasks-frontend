import { ThemeComponent } from '../theme-component.interface'

export const Popover: ThemeComponent = {
  styles: theme => ({
    dropdown: {
      backgroundColor:
        theme.colorScheme === 'light'
          ? theme.colors.background[0]
          : theme.colors.background[9]
    }
  })
}
