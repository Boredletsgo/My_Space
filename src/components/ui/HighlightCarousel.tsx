import { ChevronLeft, ChevronRight, Expand, ExternalLink, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { WorkHighlight } from '@/data/workHighlights'
import { asset, cn } from '@/lib/utils'

interface HighlightCarouselProps {
  items: WorkHighlight[]
  itemName: string
  actionLabel: string
  aspectClass?: string
}

export function HighlightCarousel({
  items,
  itemName,
  actionLabel,
  aspectClass = 'aspect-[16/9]',
}: HighlightCarouselProps) {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const touchStart = useRef<number | null>(null)
  const active = items[index]

  const show = (nextIndex: number) => {
    setIndex((nextIndex + items.length) % items.length)
  }

  useEffect(() => {
    if (!expanded) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpanded(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [expanded])

  if (!active) return null

  const imageSrc = asset(active.image!)

  return (
    <>
      <div
        className={cn(
          'border-ink bg-canvas relative overflow-hidden border-y-2',
          aspectClass,
        )}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return
          const distance = event.changedTouches[0].clientX - touchStart.current
          if (Math.abs(distance) > 50) show(index + (distance < 0 ? 1 : -1))
          touchStart.current = null
        }}
      >
        <img
          src={imageSrc}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
        />
        <span className="bg-canvas/70 absolute inset-0" aria-hidden />

        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="relative flex h-full w-full items-center justify-center p-6 sm:p-10"
          aria-label={`Enlarge ${active.title}`}
        >
          <img
            src={imageSrc}
            alt={`${active.title} ${itemName}`}
            className="border-ink shadow-hard max-h-full max-w-full rounded-xl border-2 object-contain"
          />
        </button>

        {items.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => show(index - 1)}
              aria-label={`Previous ${itemName}`}
              className="border-ink bg-surface shadow-hard absolute top-1/2 left-4 grid size-10 -translate-y-1/2 place-items-center rounded-full border-2"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => show(index + 1)}
              aria-label={`Next ${itemName}`}
              className="border-ink bg-surface shadow-hard absolute top-1/2 right-4 grid size-10 -translate-y-1/2 place-items-center rounded-full border-2"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}

        <span className="border-ink bg-surface absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1 text-xs font-bold">
          <Expand className="size-3.5" /> Enlarge
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-2xl">
            <p className="text-cobalt-500 text-xs font-bold tracking-[0.16em] uppercase">
              {active.issuer}
            </p>
            <h4 className="mt-2 text-xl leading-tight sm:text-2xl">{active.title}</h4>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              {active.description}
            </p>
            {(active.date || active.expires) && (
              <p className="text-muted mt-3 text-xs font-semibold">
                {[active.date, active.expires].filter(Boolean).join(' · ')}
              </p>
            )}
          </div>

          {active.href && (
            <a
              href={active.href}
              target="_blank"
              rel="noreferrer"
              className="border-ink bg-sun-400 shadow-hard inline-flex items-center gap-2 rounded-full border-2 px-5 py-2.5 text-sm font-bold"
            >
              {actionLabel} <ExternalLink className="size-4" />
            </a>
          )}
        </div>

        {items.length > 1 && (
          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2" aria-label={`Choose ${itemName}`}>
              {items.map((item, itemIndex) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => show(itemIndex)}
                  aria-label={`Show ${itemName} ${itemIndex + 1}: ${item.title}`}
                  aria-current={itemIndex === index}
                  className={cn(
                    'border-ink h-3 rounded-full border-2 transition-all',
                    itemIndex === index ? 'bg-cobalt-500 w-9' : 'bg-surface w-3',
                  )}
                />
              ))}
            </div>
            <p className="text-muted text-xs font-bold">
              {index + 1} / {items.length}
            </p>
          </div>
        )}
      </div>

      {expanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 sm:p-8"
          onClick={() => setExpanded(false)}
        >
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label={`Close ${itemName}`}
            className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border-2 border-white bg-black text-white"
          >
            <X className="size-5" />
          </button>
          <div
            className="flex max-h-[90vh] max-w-6xl items-center justify-center overflow-hidden rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={imageSrc}
              alt={`${active.title} ${itemName}`}
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
