import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: `Page not found — ${site.name}`,
    description: 'The page you are looking for does not exist.',
  })

  return (
    <Container className="py-28 text-center">
      <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-[0.2em] uppercase">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold">This page doesn't exist</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The link may be broken or the page may have moved.
      </p>
      <Link
        to="/"
        className="bg-brand-600 hover:bg-brand-700 mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors"
      >
        Back home
      </Link>
    </Container>
  )
}
