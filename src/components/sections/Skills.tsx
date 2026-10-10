import { BadgeCheck } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { certifications } from '@/data/education'
import { skillGroups } from '@/data/skills'

const pips = ['bg-sun-400', 'bg-cobalt-500', 'bg-coral-500']

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Things I reach for"
      title="Tools, technologies, and useful building blocks."
      description="Not a keyword wall—just the toolkit that helps me turn an idea into something real."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Card key={group.category}>
            <div className="flex items-center gap-2.5">
              <span
                className={`size-3.5 rounded-full ${pips[index % pips.length]}`}
                aria-hidden
              />
              <h3 className="text-base tracking-tight uppercase">{group.category}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card tone="sun" className="mt-6">
        <h3 className="text-lg">Certifications</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="border-ink bg-surface flex items-start gap-3 rounded-2xl border-2 px-4 py-3"
            >
              <BadgeCheck className="mt-0.5 size-4 shrink-0" />
              <span>
                <span className="block text-sm font-bold">{cert.name}</span>
                <span className="text-muted block text-xs font-semibold">
                  {cert.issuer}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  )
}
