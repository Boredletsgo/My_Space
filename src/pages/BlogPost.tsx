import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { formatDate, getPost } from '@/lib/blog'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  usePageMeta({
    title: post ? `${post.title} — ${site.name}` : `Post not found — ${site.name}`,
    description: post?.description ?? 'This post could not be found.',
  })

  if (!post) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link
          to="/blog"
          className="text-brand-600 dark:text-brand-400 mt-4 inline-block text-sm font-medium hover:underline"
        >
          Back to blog
        </Link>
      </Container>
    )
  }

  return (
    <article className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <Link
          to="/blog"
          className="hover:text-brand-600 dark:hover:text-brand-400 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors"
        >
          <ArrowLeft className="size-4" /> All posts
        </Link>

        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
            {formatDate(post.date)} · {post.readingTime} min read
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </header>

        {/* Content is authored in-repo, so the markdown source is trusted. */}
        <div
          className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-24 prose-a:text-brand-600 dark:prose-a:text-brand-400 mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>
    </article>
  )
}
