import { ReactNode } from 'react'

export interface ITimeBoxProps {
  title: string
  time: ReactNode
  date: ReactNode
  rightIcon?: ReactNode
  className?: string
}
