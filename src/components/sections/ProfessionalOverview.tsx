import {
  BadgeCheck,
  BriefcaseBusiness,
  ExternalLink,
  Layers3,
  Wrench,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { certifications } from '@/data/education'
import { experience } from '@/data/experience'
import { projects } from '@/data/projects'
import { skillGroups } from '@/data/skills'
import { cn } from '@/lib/utils'

type ProfessionalTab = 'projects' | 'journey' | 'toolkit'

const tabs: {
  id: ProfessionalTab
  label: string
  description: string
  icon: typeof Layers3
}[] = [
  {
    id: 'projects',
    label: 'Things I build',
    description: 'Selected systems and experiments.',
    icon: Layers3,
  },
  {
    id: 'journey',
    label: 'Work journey',
    description: 'Where I learned by shipping.',
    icon: BriefcaseBusiness,
  },
  {
    id: 'toolkit',
    label: 'Toolkit',
    description: 'The technologies I reach for.',
    icon: Wrench,
  },
]

const projectCovers = [
  'bg-sun-400',
  'bg-cobalt-500',
  'bg-coral-500',
  'bg-cobalt-500',
  'bg-sun-400',
]

const experienceAccents = ['bg-sun-400', 'bg-cobalt-500', 'bg-coral-500']

function ProjectsPanel() {
  const [showAll, setShowAll] = useState(false)
  const visible = useMemo(
    () => (showAll ? projects : projects.filter((project) => project.featured)),
    [showAll],
  )

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-muted max-w-xl text-sm leading-relaxed">
          A focused selection first; the complete project archive is one click away.
        </p>
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          className="border-ink bg-surface shadow-hard rounded-full border-2 px-4 py-2 text-sm font-bold"
        >
          {showAll ? 'Show featured only' : `View all ${projects.length} projects`}
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((project, index) => {
          const cover = projectCovers[index % projectCovers.length]
          const lightCover = cover === 'bg-sun-400'

          return (
            <Card key={project.slug} className="flex flex-col overflow-hidden p-0">
              <div
                className={cn(
                  'border-ink flex items-end justify-between gap-4 border-b-2 px-5 py-4',
                  cover,
                  lightCover ? 'text-ink' : 'text-white',
                )}
              >
                <h4
                  className={cn(
                    'text-xl leading-tight',
                    !lightCover && 'text-white dark:text-white',
                  )}
                >
                  {project.name}
                </h4>
                <span className="text-xs font-bold whitespace-nowrap">
                  {project.period}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="font-bold">{project.tagline}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-muted flex gap-2 text-sm leading-relaxed"
                    >
                      <span className="bg-ink mt-2 size-1.5 shrink-0 rounded-full" />
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
          )
        })}
      </div>
    </>
  )
}

function JourneyPanel() {
  return (
    <div className="space-y-5">
      {experience.map((item, index) => (
        <Card key={`${item.company}-${item.period}`} className="relative overflow-hidden">
          <span
            className={cn(
              'absolute inset-y-0 left-0 w-2.5',
              experienceAccents[index % experienceAccents.length],
            )}
            aria-hidden
          />
          <div className="pl-4">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h4 className="text-xl sm:text-2xl">{item.role}</h4>
              <span className="border-ink bg-canvas rounded-full border-2 px-3 py-1 text-xs font-bold">
                {item.period}
              </span>
            </div>
            <p className="text-cobalt-500 mt-2 text-sm font-bold">
              {item.company}
              {item.client ? ` · ${item.client}` : ''}
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
                <li
                  key={highlight}
                  className="text-muted flex gap-3 text-sm leading-relaxed"
                >
                  <span
                    className={cn(
                      'mt-1.5 size-2.5 shrink-0 rounded-full',
                      experienceAccents[index % experienceAccents.length],
                    )}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  )
}

function ToolkitPanel() {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Card key={group.category}>
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  'size-3.5 rounded-full',
                  index % 3 === 0 && 'bg-sun-400',
                  index % 3 === 1 && 'bg-cobalt-500',
                  index % 3 === 2 && 'bg-coral-500',
                )}
              />
              <h4 className="text-base tracking-tight uppercase">{group.category}</h4>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card tone="sun" className="mt-5">
        <h4 className="text-lg">Certifications</h4>
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
    </>
  )
}

export function ProfessionalOverview() {
  const [activeTab, setActiveTab] = useState<ProfessionalTab>('projects')

  return (
    <Section
      id="professional"
      eyebrow="Professional"
      title="The work, the journey, and the toolkit."
      description="A concise professional view—open the part you care about without scrolling through an entire résumé."
    >
      <div
        role="tablist"
        aria-label="Professional profile"
        className="mb-7 grid gap-3 sm:grid-cols-3"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon
          const selected = activeTab === tab.id

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="professional-panel"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'border-ink rounded-2xl border-2 p-4 text-left transition-all',
                selected
                  ? 'bg-ink text-canvas shadow-hard -translate-y-0.5'
                  : 'bg-surface text-ink hover:bg-sun-300',
              )}
            >
              <Icon className="size-5" />
              <span className="mt-3 block font-bold">{tab.label}</span>
              <span
                className={cn(
                  'mt-1 block text-xs',
                  selected ? 'text-canvas/70' : 'text-muted',
                )}
              >
                {tab.description}
              </span>
            </button>
          )
        })}
      </div>

      <div id="professional-panel" role="tabpanel">
        {activeTab === 'projects' && <ProjectsPanel />}
        {activeTab === 'journey' && <JourneyPanel />}
        {activeTab === 'toolkit' && <ToolkitPanel />}
      </div>
    </Section>
  )
}
