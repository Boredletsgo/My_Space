import { useEffect } from 'react'

interface PageMeta {
  title: string
  description: string
}

/** Keeps document title and meta description in sync per route. */
export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    document.title = title

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [title, description])
}
