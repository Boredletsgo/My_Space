import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-16 sm:py-20', className)}>
      <Container>
        <header className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="text-brand-600 dark:text-brand-400 mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {description}
            </p>
          )}
        </header>
        {children}
      </Container>
    </section>
  )
}
