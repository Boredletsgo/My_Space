import { Badge } from '@/components/ui/Badge'
import { Section } from '@/components/ui/Section'
import { experience } from '@/data/experience'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped"
      description="Delivering agentic AI and automation inside Microsoft's engineering ecosystem."
    >
      <ol className="relative space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
        {experience.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span className="bg-brand-500 absolute top-1.5 -left-[1.9rem] size-3 rounded-full ring-4 ring-white dark:ring-slate-950" />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-500">
                {item.period}
              </span>
            </div>

            <p className="text-brand-600 dark:text-brand-400 mt-1 text-sm font-medium">
              {item.company}
              {item.client ? ` — Client: ${item.client}` : ''}
            </p>

            {item.note && (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                {item.note}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <ul className="mt-4 space-y-2.5">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="before:bg-brand-400 relative pl-5 text-sm leading-relaxed text-slate-600 before:absolute before:top-2 before:left-0 before:size-1.5 before:rounded-full dark:text-slate-400"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
