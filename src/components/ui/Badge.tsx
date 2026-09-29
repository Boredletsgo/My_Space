import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Badge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300',
        className,
      )}
    >
      {children}
    </span>
  )
}
