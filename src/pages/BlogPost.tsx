import { Link, useParams } from 'react-router-dom'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatDate, getPost } from '@/lib/blog'
import { usePageMeta } from '@/hooks/usePageMeta'
import NotFound from '@/pages/NotFound'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  usePageMeta({
    title: post ? `${post.title} — Mahima Sahu` : 'Post not found',
    description: post?.description ?? '',
  })

  if (!post) return <NotFound />

  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <Link
          to="/blog"
          className="border-ink bg-surface shadow-hard hover:shadow-hard-lg inline-flex rounded-full border-2 px-4 py-1.5 text-sm font-bold transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          ← All posts
        </Link>

        <header className="mt-8">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="border-ink bg-canvas inline-flex rounded-full border-2 px-3 py-1 text-xs font-semibold">
              {formatDate(post.date)}
            </span>
            <span className="text-muted text-xs font-semibold">
              {post.readingTime} min read
            </span>
          </div>
          <h1 className="text-4xl leading-[1.05] text-balance sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-muted mt-4 text-lg leading-relaxed">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </header>

        <Card className="mt-10 sm:p-10">
          <div
            className="prose dark:prose-invert prose-headings:font-display prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-cobalt-500 prose-a:font-semibold prose-code:before:content-none prose-code:after:content-none max-w-none"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Card>
      </Container>
    </article>
  )
}
