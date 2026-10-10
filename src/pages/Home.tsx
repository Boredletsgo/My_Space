import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { ExperienceSection } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { JournalPreview } from '@/components/sections/JournalPreview'
import { PersonalCorner } from '@/components/sections/PersonalCorner'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { WorkHighlights } from '@/components/sections/WorkHighlights'
import { usePageMeta } from '@/hooks/usePageMeta'
import { site } from '@/data/site'

export default function Home() {
  usePageMeta({
    title: `${site.name} — ${site.role}`,
    description: site.summary,
  })

  return (
    <>
      <Hero />
      <About />
      <WorkHighlights />
      <JournalPreview />
      <PersonalCorner />
      <Projects />
      <ExperienceSection />
      <Skills />
      <Contact />
    </>
  )
}
