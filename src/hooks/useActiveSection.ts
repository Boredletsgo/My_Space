import { useEffect, useState } from 'react'

/** Tracks which in-page section is currently under the sticky navbar. */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return active
}
