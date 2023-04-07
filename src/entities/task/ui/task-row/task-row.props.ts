import { ReactNode } from 'react'

export interface ITaskRowProps {
  taskTitle: string
  className?: string
  checkbox?: ReactNode
  actions?: ReactNode
}
