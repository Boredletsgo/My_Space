import { ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

const FILTERS = ['All', 'Featured'] as const

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
      title="Things I've built"
      description="Multi-agent systems, LLM tooling, and applied ML — from prototype to production."
    >
      <div className="mb-8 flex gap-2">
        {FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              filter === option
                ? 'border-brand-500 bg-brand-500 text-white'
                : 'border-slate-200 text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400',
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <Card key={project.slug} interactive className="flex flex-col">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <span className="text-xs text-slate-500 dark:text-slate-500">
                {project.period}
              </span>
            </div>

            <p className="text-brand-600 dark:text-brand-400 mt-1 text-sm font-medium">
              {project.tagline}
            </p>

            <ul className="mt-4 flex-1 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="before:bg-brand-400 relative pl-5 text-sm leading-relaxed text-slate-600 before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full dark:text-slate-400"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-600 dark:text-brand-400 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                  >
                    {link.label} <ExternalLink className="size-3.5" />
                  </a>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
