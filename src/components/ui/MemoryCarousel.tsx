import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import type { PersonalCornerItem } from '@/data/personalCorner'
import { asset, cn } from '@/lib/utils'

export function MemoryCarousel({ items }: { items: PersonalCornerItem[] }) {
  const [index, setIndex] = useState(0)
  const active = items[index]

  const show = (nextIndex: number) => {
    setIndex((nextIndex + items.length) % items.length)
  }

  return (
    <div
      className="border-ink bg-canvas relative mt-7 overflow-hidden rounded-2xl border-2 select-none"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={asset(active.image!)}
          alt=""
          aria-hidden
          draggable={false}
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-xl"
        />
        <span className="bg-canvas/65 absolute inset-0" aria-hidden />
        <span
          className="bg-sun-300 border-ink absolute top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-2 border-x-2 opacity-90"
          aria-hidden
        />

        <div className="relative flex h-full items-center justify-center p-7 pt-12">
          <img
            src={asset(active.image!)}
            alt={active.title}
            draggable={false}
            loading="lazy"
            decoding="async"
            className="shadow-hard pointer-events-none max-h-full max-w-full rounded-lg object-contain"
          />
        </div>

        <button
          type="button"
          onClick={() => show(index - 1)}
          aria-label="Previous memory"
          className="border-ink bg-surface shadow-hard absolute top-1/2 left-3 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full border-2"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={() => show(index + 1)}
          aria-label="Next memory"
          className="border-ink bg-surface shadow-hard absolute top-1/2 right-3 z-20 grid size-9 -translate-y-1/2 place-items-center rounded-full border-2"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="border-ink bg-surface border-t-2 p-4">
        <p className="font-bold">{active.title}</p>
        {active.description && (
          <p className="text-muted mt-1 text-xs leading-relaxed">{active.description}</p>
        )}

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex gap-1.5" aria-label="Choose a memory">
            {items.map((item, itemIndex) => (
              <button
                key={item.title}
                type="button"
                onClick={() => show(itemIndex)}
                aria-label={`Show ${item.title}`}
                aria-current={itemIndex === index}
                className={cn(
                  'border-ink h-2.5 rounded-full border-2 transition-all',
                  itemIndex === index ? 'bg-coral-500 w-7' : 'bg-surface w-2.5',
                )}
              />
            ))}
          </div>
          <p className="text-muted text-xs font-bold">
            {index + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  )
}
