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
    <section id={id} className={cn('scroll-mt-28 py-16 sm:py-24', className)}>
      <Container>
        <header className="mb-10 max-w-2xl">
          {eyebrow && (
            <span className="border-ink bg-sun-400 text-ink shadow-hard mb-5 inline-flex rounded-full border-2 px-4 py-1 text-xs font-bold tracking-[0.18em] uppercase">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl leading-[1.05] text-balance sm:text-5xl">{title}</h2>
          {description && (
            <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
              {description}
            </p>
          )}
        </header>
        {children}
      </Container>
    </section>
  )
}
