import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { site } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'
import { formatDate, getAllPosts } from '@/lib/blog'

export default function BlogList() {
  const posts = getAllPosts()

  usePageMeta({
    title: `Blog — ${site.name}`,
    description: 'Notes on agentic AI, MCP, LLM systems, and platform engineering.',
  })

  return (
    <Section
      id="blog"
      eyebrow="Blog"
      title="Notes & writing"
      description="Lessons from building agentic AI systems, MCP servers, and automation platforms."
      className="pt-12"
    >
      {posts.length === 0 ? (
        <Card>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            No posts yet. Add a markdown file to <code>src/content/blog/</code> and it
            appears here automatically.
          </p>
        </Card>
      ) : (
        <div className="space-y-5">
          {posts.map((post) => (
            <Card key={post.slug} interactive>
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-500">
                    {formatDate(post.date)} · {post.readingTime} min read
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                  <span className="text-brand-600 dark:text-brand-400 ml-auto inline-flex items-center gap-1 text-sm font-medium">
                    Read <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </Section>
  )
}
