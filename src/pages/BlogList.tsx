import { Link } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatDate, getAllPosts } from '@/lib/blog'
import { usePageMeta } from '@/hooks/usePageMeta'

export default function BlogList() {
  const posts = getAllPosts()

  usePageMeta({
    title: 'Blog — Mahima Sahu',
    description: 'Notes on AI engineering, .NET platforms and test automation.',
  })

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <header className="mb-12 max-w-2xl">
          <span className="border-ink bg-sun-400 text-ink shadow-hard mb-5 inline-flex rounded-full border-2 px-4 py-1 text-xs font-bold tracking-[0.18em] uppercase">
            Writing
          </span>
          <h1 className="text-4xl leading-[1.05] text-balance sm:text-6xl">
            Notes from the build.
          </h1>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
            Things I learned shipping AI platforms, .NET services and automated tests.
          </p>
        </header>

        {posts.length === 0 ? (
          <Card>
            <p className="text-muted">No posts yet — check back soon.</p>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <Card key={post.slug} interactive className="p-0">
                <Link to={`/blog/${post.slug}`} className="block h-full p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="border-ink bg-canvas inline-flex rounded-full border-2 px-3 py-1 text-xs font-semibold">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-muted text-xs font-semibold">
                      {post.readingTime} min read
                    </span>
                  </div>
                  <h2 className="text-2xl leading-tight text-balance">{post.title}</h2>
                  <p className="text-muted mt-3 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  <span className="border-ink bg-sun-400 text-ink mt-6 inline-flex rounded-full border-2 px-4 py-1.5 text-sm font-bold">
                    Read →
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}
