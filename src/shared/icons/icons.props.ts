import { ReactComponent as CalendarIcon } from './calendar.svg'
import { ReactComponent as ClockIcon } from './calendar.svg'
import { ReactComponent as LogoutIcon } from './log-out.svg'
import { ReactComponent as MoonIcon } from './moon.svg'
import { ReactComponent as SettingsIcon } from './settings.svg'
import { ReactComponent as SunIcon } from './sun.svg'
import { ReactComponent as UserIcon } from './user.svg'

import { ReactComponent as DotsIcon } from './dots.svg'
import { ReactComponent as TrashIcon } from './trash.svg'
import { ReactComponent as EditIcon } from './edit.svg'

import { ReactComponent as AddTaskIcon } from './add-task.svg'
import { ReactComponent as ArrowIcon } from './arrow.svg'
import { ReactComponent as PremiumStarIcon } from './premium-star.svg'
import { ReactComponent as CheckboxIcon } from './checkbox.svg'
import { ReactComponent as PlusSquareIcon } from './plus-square.svg'

export const strokeIcons = {
  UserIcon,
  CalendarIcon,
  ClockIcon,
  LogoutIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon
}

export const fillIcons = {
  DotsIcon,
  TrashIcon,
  EditIcon
}

export const regularIcons = {
  AddTaskIcon,
  ArrowIcon,
  PremiumStarIcon,
  CheckboxIcon,
  PlusSquareIcon
}

export type strokeIconNames = keyof typeof strokeIcons
export type fillIconNames = keyof typeof fillIcons
export type regularIconNames = keyof typeof regularIcons

export interface IStrokeIconProps {
  icon: strokeIconNames
  className?: string
}

export interface IFillIconProps {
  icon: fillIconNames
  className?: string
}

export interface IRegularIconProps {
  icon: regularIconNames
  className?: string
}
