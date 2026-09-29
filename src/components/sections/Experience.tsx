import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { experience } from '@/data/experience'

const accents = ['bg-sun-400', 'bg-cobalt-500', 'bg-coral-500']

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped"
      description="Delivering agentic AI and automation inside Microsoft's engineering ecosystem."
    >
      <div className="space-y-6">
        {experience.map((item, index) => (
          <Card
            key={`${item.company}-${item.period}`}
            className="relative overflow-hidden"
          >
            <span
              className={`absolute top-0 bottom-0 left-0 w-2.5 ${accents[index % accents.length]}`}
              aria-hidden
            />

            <div className="pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl sm:text-2xl">{item.role}</h3>
                <span className="border-ink bg-canvas rounded-full border-2 px-3 py-1 text-xs font-bold">
                  {item.period}
                </span>
              </div>

              <p className="text-cobalt-500 mt-2 text-sm font-bold">
                {item.company}
                {item.client ? ` — Client: ${item.client}` : ''}
              </p>

              {item.note && (
                <p className="text-muted mt-1 text-xs font-semibold">{item.note}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <ul className="mt-5 space-y-3">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      className={`mt-1.5 size-2.5 shrink-0 rounded-full ${accents[index % accents.length]}`}
                      aria-hidden
                    />
                    <span className="text-muted text-sm leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
