import { Award, HeartHandshake, Milestone } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { HighlightCarousel } from '@/components/ui/HighlightCarousel'
import { Section } from '@/components/ui/Section'
import { workHighlights } from '@/data/workHighlights'

export function WorkHighlights() {
  const certificates = workHighlights
    .filter((item) => item.kind === 'certificate')
    .slice(0, 5)
  const appreciation = workHighlights.filter((item) => item.kind === 'appreciation')
  const milestones = workHighlights.filter((item) => item.kind === 'milestone')

  return (
    <Section
      id="work-highlights"
      eyebrow="Work & recognition"
      title="The moments behind the job title."
      description="A growing archive of certificates, appreciation, and milestones from the work I am proud to have been part of."
    >
      <div className="space-y-6">
        <Card className="overflow-hidden p-0">
          <div className="flex items-center gap-3 p-6 sm:px-8">
            <span className="border-ink bg-sun-400 grid size-12 place-items-center rounded-2xl border-2">
              <Award className="size-6" />
            </span>
            <div>
              <h3 className="text-xl">Featured certificates</h3>
              <p className="text-muted mt-1 text-sm">
                Five credentials that reflect what I have been learning and building.
              </p>
            </div>
          </div>
          <HighlightCarousel
            items={certificates}
            itemName="certificate"
            actionLabel="Verify credential"
          />
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden p-0">
            <div className="flex items-center gap-3 p-6 sm:px-8">
              <span className="border-ink bg-coral-500 grid size-12 place-items-center rounded-2xl border-2 text-white">
                <HeartHandshake className="size-6" />
              </span>
              <div>
                <h3 className="text-xl">Appreciation</h3>
                <p className="text-muted mt-1 text-sm">
                  Recognition that reminds me good work is always a team effort.
                </p>
              </div>
            </div>
            <HighlightCarousel
              items={appreciation}
              itemName="appreciation"
              actionLabel="View recognition"
              aspectClass="aspect-[4/3]"
            />
          </Card>

          <Card className="overflow-hidden p-0">
            <div className="flex items-center gap-3 p-6 sm:px-8">
              <span className="border-ink bg-cobalt-500 grid size-12 place-items-center rounded-2xl border-2 text-white">
                <Milestone className="size-6" />
              </span>
              <div>
                <h3 className="text-xl">Milestones</h3>
                <p className="text-muted mt-1 text-sm">
                  The personal and professional moments that shaped the journey.
                </p>
              </div>
            </div>
            <HighlightCarousel
              items={milestones}
              itemName="milestone"
              actionLabel="View story"
              aspectClass="aspect-[4/3]"
            />
          </Card>
        </div>
      </div>
    </Section>
  )
}
