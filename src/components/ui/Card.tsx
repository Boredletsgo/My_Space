import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Tone = 'surface' | 'sun' | 'cobalt' | 'coral'

const tones: Record<Tone, string> = {
  surface: 'bg-surface text-ink',
  sun: 'bg-sun-400 text-ink',
  cobalt: 'bg-cobalt-500 text-white',
  coral: 'bg-coral-500 text-white',
}

export function Card({
  children,
  className,
  tone = 'surface',
  interactive = false,
}: {
  children: ReactNode
  className?: string
  tone?: Tone
  interactive?: boolean
}) {
  return (
    <div
      className={cn(
        'border-ink shadow-hard rounded-3xl border-2 p-6',
        tones[tone],
        interactive &&
          'hover:shadow-hard-lg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </div>
  )
}
