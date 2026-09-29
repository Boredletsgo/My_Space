import { GraduationCap, ScrollText } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { education, publications } from '@/data/education'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Turning ambiguous problems into production AI"
      description="I work at the intersection of agentic AI and platform engineering — designing LLM control planes, MCP servers, and automation frameworks that survive real enterprise constraints."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="mb-6 flex items-center gap-3">
            <span className="border-ink bg-cobalt-500 grid size-10 place-items-center rounded-full border-2 text-white">
              <GraduationCap className="size-5" />
            </span>
            <h3 className="text-lg">Education</h3>
          </div>

          <ul className="space-y-5">
            {education.map((item) => (
              <li key={item.institution} className="border-ink border-l-2 pl-4">
                <p className="font-bold">{item.qualification}</p>
                <p className="text-muted mt-1 text-sm">{item.institution}</p>
                <p className="text-muted mt-1 text-xs font-semibold">
                  {item.period}
                  {item.detail ? ` · ${item.detail}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="mb-6 flex items-center gap-3">
            <span className="border-ink bg-coral-500 grid size-10 place-items-center rounded-full border-2 text-white">
              <ScrollText className="size-5" />
            </span>
            <h3 className="text-lg">Research & Publications</h3>
          </div>

          <ul className="space-y-5">
            {publications.map((item) => (
              <li key={item.title} className="border-ink border-l-2 pl-4">
                <p className="font-bold">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="decoration-sun-500 underline-offset-4 hover:underline hover:decoration-4"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </p>
                <p className="text-muted mt-1 text-xs font-semibold">{item.venue}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
