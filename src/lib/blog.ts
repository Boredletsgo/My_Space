import { marked } from 'marked'
import type { BlogPost, BlogPostMeta } from '@/types/content'

const WORDS_PER_MINUTE = 220

const files = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

interface Frontmatter {
  title: string
  description: string
  date: string
  tags: string[]
}

/**
 * Minimal YAML frontmatter reader. Supports `key: value` and inline
 * `tags: [a, b]` lists, which is all the blog format needs — keeping the
 * bundle free of a full YAML parser.
 */
function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) {
    return {
      data: { title: 'Untitled', description: '', date: '1970-01-01', tags: [] },
      body: raw,
    }
  }

  const data: Record<string, unknown> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const pair = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line.trim())
    if (!pair) continue

    const [, key, rawValue] = pair
    const value = rawValue.trim().replace(/^["']|["']$/g, '')

    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean)
    } else {
      data[key] = value
    }
  }

  return {
    data: {
      title: String(data.title ?? 'Untitled'),
      description: String(data.description ?? ''),
      date: String(data.date ?? '1970-01-01'),
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    },
    body: match[2],
  }
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

const posts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      ...data,
      readingTime: Math.max(1, Math.round(body.split(/\s+/).length / WORDS_PER_MINUTE)),
      html: marked.parse(body, { async: false }),
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export function getAllPosts(): BlogPostMeta[] {
  return posts.map(({ html: _html, ...meta }) => meta)
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
