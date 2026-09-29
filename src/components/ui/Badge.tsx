import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'surface' | 'sun' | 'cobalt' | 'coral'

const tones: Record<Tone, string> = {
  surface: 'bg-surface text-ink',
  sun: 'bg-sun-400 text-ink',
  cobalt: 'bg-cobalt-500 text-white',
  coral: 'bg-coral-500 text-white',
}

export function Badge({
  children,
  className,
  tone = 'surface',
}: {
  children: ReactNode
  className?: string
  tone?: Tone
}) {
  return (
    <span
      className={cn(
        'border-ink inline-flex items-center rounded-full border-2 px-3 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Small colour pip used in the legend rows of the reference design. */
export function Dot({ tone = 'sun' }: { tone?: Exclude<Tone, 'surface'> }) {
  return (
    <span
      className={cn(
        'inline-block size-2.5 shrink-0 rounded-full',
        tone === 'sun' && 'bg-sun-400',
        tone === 'cobalt' && 'bg-cobalt-500',
        tone === 'coral' && 'bg-coral-500',
      )}
    />
  )
}
