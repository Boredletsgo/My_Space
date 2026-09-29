import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary:
    'border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800',
  ghost:
    'text-slate-600 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400',
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({
  variant = 'primary',
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  )
}
