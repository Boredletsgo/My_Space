import { Expand, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { PersonalCornerItem } from '@/data/personalCorner'
import { asset } from '@/lib/utils'

export function PersonalGallery({ items }: { items: PersonalCornerItem[] }) {
  const [active, setActive] = useState<PersonalCornerItem | null>(null)
  const groups = useMemo(
    () =>
      Array.from(new Set(items.map((item) => item.group ?? 'Gallery'))).map((group) => ({
        name: group,
        items: items.filter((item) => (item.group ?? 'Gallery') === group),
      })),
    [items],
  )

  useEffect(() => {
    if (!active) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [active])

  return (
    <>
      <div className="mt-7 space-y-8">
        {groups.map((group) => (
          <div key={group.name}>
            <p className="mb-4 text-xs font-bold tracking-[0.16em] uppercase opacity-75">
              {group.name}
            </p>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {group.items.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(item)}
                  className="border-ink bg-surface text-ink shadow-hard group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border-2 p-2 text-left transition-transform hover:-translate-y-1"
                  aria-label={`Enlarge ${item.title}`}
                >
                  <img
                    src={asset(item.image!)}
                    alt={item.title}
                    className="h-auto w-full rounded-lg"
                  />
                  <span className="flex items-center justify-between gap-3 px-2 pt-3 pb-1">
                    <span className="text-xs font-bold">{item.title}</span>
                    <Expand className="size-3.5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close artwork"
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border-2 border-white bg-black text-white"
          >
            <X className="size-5" />
          </button>
          <figure
            className="flex max-h-[90vh] max-w-6xl flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={asset(active.image!)}
              alt={active.title}
              className="max-h-[84vh] max-w-full rounded-xl object-contain"
            />
            <figcaption className="text-sm font-bold text-white">
              {active.title}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
