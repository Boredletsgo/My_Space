import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found — Mahima Sahu',
    description: 'The page you are looking for does not exist.',
  })

  return (
    <div className="flex flex-1 items-center py-24">
      <Container>
        <Card className="mx-auto max-w-xl text-center">
          <span className="border-ink bg-sun-400 text-ink shadow-hard inline-flex rounded-full border-2 px-5 py-1.5 text-sm font-bold tracking-[0.18em] uppercase">
            404
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">Nothing here.</h1>
          <p className="text-muted mt-4 leading-relaxed">
            The page you are looking for moved, or never existed in the first place.
          </p>
          <Link
            to="/"
            className="border-ink bg-ink text-canvas shadow-hard hover:shadow-hard-lg mt-8 inline-flex rounded-full border-2 px-6 py-2.5 text-sm font-bold transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            ← Back home
          </Link>
        </Card>
      </Container>
    </div>
  )
}
