import { ArrowRight, ExternalLink, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { substack } from '@/data/writing'
import { formatDate, getAllPosts } from '@/lib/blog'

export function JournalPreview() {
  const localPosts = getAllPosts().slice(0, 2)
  const featuredPost = substack.posts[0]

  return (
    <Section
      id="notes"
      eyebrow="From my notebook"
      title="Ideas, lessons, and things worth remembering."
      description="BoredLetsGo is where code, career, curiosity, and life outside the screen share the same page."
    >
      <div className="border-ink bg-cobalt-500 shadow-hard-lg mb-6 overflow-hidden rounded-[2rem] border-2 text-white">
        <a
          href={featuredPost.href}
          target="_blank"
          rel="noreferrer"
          className="group grid gap-8 p-7 sm:grid-cols-[1fr_auto] sm:items-end sm:p-10"
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="border-ink bg-sun-400 text-ink rounded-full border-2 px-3 py-1 text-xs font-bold tracking-[0.14em] uppercase">
                First on Substack
              </span>
              <span className="text-xs font-semibold text-white/70">
                {formatDate(featuredPost.date)} · {featuredPost.category}
              </span>
            </div>
            <h3 className="text-3xl leading-tight text-white sm:text-4xl dark:text-white">
              {featuredPost.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {featuredPost.description}
            </p>
          </div>
          <span className="border-ink bg-surface text-ink shadow-hard inline-flex w-fit items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-transform group-hover:-translate-y-1">
            Read article <ExternalLink className="size-4" />
          </span>
        </a>
      </div>

      <div className="border-ink bg-surface shadow-hard overflow-hidden rounded-[2rem] border-2">
        {localPosts.map((post, index) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className={`group hover:bg-sun-300/30 grid gap-5 p-7 transition-colors sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:p-9 ${
              index > 0 ? 'border-ink/20 border-t' : ''
            }`}
          >
            <div>
              <p className="text-coral-500 text-xs font-bold tracking-[0.15em] uppercase">
                Portfolio archive
              </p>
              <p className="text-muted mt-1 text-xs">{formatDate(post.date)}</p>
            </div>
            <div>
              <h3 className="text-2xl leading-tight">{post.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">
                {post.description}
              </p>
            </div>
            <ArrowRight className="text-cobalt-500 size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={substack.publicationUrl}
          target="_blank"
          rel="noreferrer"
          className="border-ink bg-ink text-canvas shadow-hard inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-bold"
        >
          Visit {substack.name} <ExternalLink className="size-4" />
        </a>
        <a
          href={substack.subscribeUrl}
          target="_blank"
          rel="noreferrer"
          className="border-ink bg-sun-400 text-ink shadow-hard inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-bold"
        >
          <Mail className="size-4" /> Subscribe free
        </a>
        <Link
          to="/blog"
          className="border-ink bg-surface shadow-hard inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-bold"
        >
          Browse technical archive <ArrowRight className="size-4" />
        </Link>
      </div>
    </Section>
  )
}
