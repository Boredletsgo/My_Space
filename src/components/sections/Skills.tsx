import { BadgeCheck } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { certifications } from '@/data/education'
import { skillGroups } from '@/data/skills'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Toolkit"
      description="The stack I reach for when designing and shipping AI systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.category}>
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">
              {group.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">
          Certifications
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex items-start gap-2.5">
              <BadgeCheck className="text-brand-500 mt-0.5 size-4 shrink-0" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-900 dark:text-white">
                  {cert.name}
                </span>
                <span className="block text-xs text-slate-500">{cert.issuer}</span>
              </span>
            </li>
          ))}
        </ul>
      </Card>
    </Section>
  )
}
