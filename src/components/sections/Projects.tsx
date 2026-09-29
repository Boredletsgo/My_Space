import { ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

const FILTERS = ['All', 'Featured'] as const

const covers = [
  'bg-sun-400',
  'bg-cobalt-500',
  'bg-coral-500',
  'bg-cobalt-500',
  'bg-sun-400',
]

export function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')

  const visible = useMemo(
    () => (filter === 'Featured' ? projects.filter((p) => p.featured) : projects),
    [filter],
  )

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Better showcase"
      description="Multi-agent systems, LLM tooling, and applied ML — from prototype to production."
    >
      <div className="mb-8 flex gap-3">
        {FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            className={cn(
              'border-ink rounded-full border-2 px-5 py-2 text-sm font-bold transition-all',
              filter === option
                ? 'bg-ink text-canvas shadow-hard'
                : 'bg-surface text-muted hover:-translate-y-0.5',
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project, index) => (
          <Card
            key={project.slug}
            interactive
            className="flex flex-col overflow-hidden p-0"
          >
            <div
              className={cn(
                'border-ink flex items-end justify-between border-b-2 px-6 py-5',
                covers[index % covers.length],
                covers[index % covers.length] === 'bg-sun-400'
                  ? 'text-ink'
                  : 'text-white',
              )}
            >
              <h3
                className={cn(
                  'font-display text-2xl leading-tight font-extrabold',
                  covers[index % covers.length] === 'bg-sun-400'
                    ? 'text-ink'
                    : 'text-white dark:text-white',
                )}
              >
                {project.name}
              </h3>
              <span className="text-xs font-bold whitespace-nowrap">
                {project.period}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <p className="font-bold">{project.tagline}</p>

              <ul className="mt-4 flex-1 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      className="bg-ink mt-1.5 size-2 shrink-0 rounded-full"
                      aria-hidden
                    />
                    <span className="text-muted text-sm leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="border-ink bg-coral-500 inline-flex items-center gap-1.5 rounded-full border-2 px-4 py-1.5 text-xs font-bold text-white"
                    >
                      {link.label} <ExternalLink className="size-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
