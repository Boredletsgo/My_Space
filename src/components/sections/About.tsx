import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { education, publications } from '@/data/education'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Turning ambiguous business problems into production AI"
      description="I work at the intersection of agentic AI and platform engineering — designing LLM control planes, MCP servers, and automation frameworks that survive real enterprise constraints."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">Education</h3>
          <ul className="mt-5 space-y-5">
            {education.map((item) => (
              <li key={item.institution}>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {item.qualification}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                  {item.period}
                  {item.detail ? ` · ${item.detail}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase">
            Research & Publications
          </h3>
          <ul className="mt-5 space-y-5">
            {publications.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-600 dark:hover:text-brand-400 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                  {item.venue}
                </p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
