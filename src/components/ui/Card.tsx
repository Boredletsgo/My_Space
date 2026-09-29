import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Card({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode
  className?: string
  interactive?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60',
        interactive &&
          'hover:border-brand-400 dark:hover:border-brand-500 transition-colors duration-200 hover:shadow-md',
        className,
      )}
    >
      {children}
    </div>
  )
}
