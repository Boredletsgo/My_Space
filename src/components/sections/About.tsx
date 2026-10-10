import { ArrowRight, BookOpen, BrainCircuit, Coffee } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="A little about me"
      title="There is more to a person than their job title."
      description="This is the place where my professional world and personal curiosity meet. Some days that means designing agentic systems; other days it means writing down an idea before it disappears."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <a href="#work-highlights" className="block">
          <Card interactive className="flex h-full flex-col">
            <BrainCircuit className="text-cobalt-500 size-7" />
            <h3 className="mt-8 text-xl">At work</h3>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              I turn ambiguous engineering problems into practical AI systems, with a soft
              spot for agents, developer tools, and automation that genuinely helps
              people.
            </p>
            <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold">
              See work & recognition <ArrowRight className="size-4" />
            </span>
          </Card>
        </a>

        <a href="#notes" className="block">
          <Card interactive className="flex h-full flex-col">
            <BookOpen className="text-coral-500 size-7" />
            <h3 className="mt-8 text-xl">In my notebook</h3>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              I write about the things I am learning while building: architecture choices,
              stubborn bugs, experiments, and lessons that do not fit into a résumé.
            </p>
            <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold">
              Read BoredLetsGo <ArrowRight className="size-4" />
            </span>
          </Card>
        </a>

        <a href="#my-corner" className="block">
          <Card interactive className="flex h-full flex-col">
            <Coffee className="text-sun-500 size-7" />
            <h3 className="mt-8 text-xl">Beyond the screen</h3>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              This corner is still growing. It is for the interests, observations, and
              ordinary moments that make the work—and the person doing it—more
              interesting.
            </p>
            <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold">
              Step into my corner <ArrowRight className="size-4" />
            </span>
          </Card>
        </a>
      </div>
    </Section>
  )
}
