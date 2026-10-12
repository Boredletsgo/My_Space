import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { bookshelf } from '@/data/bookshelf'
import { cn } from '@/lib/utils'

export function BookshelfCarousel() {
  const [index, setIndex] = useState(0)
  const active = bookshelf[index]

  const show = (nextIndex: number) => {
    setIndex((nextIndex + bookshelf.length) % bookshelf.length)
  }

  return (
    <div className="border-ink bg-canvas relative mt-7 overflow-hidden rounded-2xl border-2 p-4 sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(transparent, transparent 27px, currentColor 28px)',
        }}
        aria-hidden
      />

      <span
        className="bg-sun-300 border-ink absolute top-2 left-1/2 z-10 h-7 w-24 -translate-x-1/2 -rotate-2 border-x-2 opacity-90"
        aria-hidden
      />

      <div className="relative grid min-h-[29rem] items-center gap-7 pt-5 sm:grid-cols-[minmax(13rem,0.7fr)_1.3fr]">
        <div className="relative mx-auto w-full max-w-64 px-4">
          <div
            className={cn(
              'border-ink shadow-hard-lg relative aspect-[2/3] overflow-hidden rounded-r-xl border-2 p-6',
              active.coverClass,
            )}
          >
            <span className="absolute inset-y-0 left-0 w-3 border-r-2 border-black/35 bg-black/20" />
            <span className="text-6xl font-black opacity-25" aria-hidden>
              {active.symbol}
            </span>
            <div className="absolute right-6 bottom-7 left-7">
              <h4
                className={cn(
                  'text-2xl leading-tight',
                  active.coverClass.includes('text-white') &&
                    'text-white dark:text-white',
                )}
              >
                {active.title}
              </h4>
              <p className="mt-3 text-xs font-semibold opacity-75">{active.author}</p>
            </div>
          </div>
          <span
            className={cn(
              'border-ink shadow-hard absolute -right-1 -bottom-3 rotate-3 rounded-full border-2 px-3 py-1 text-xs font-black tracking-wide uppercase',
              active.accentClass,
            )}
          >
            {active.status === 'reading' ? 'Current read' : 'Read & shelved'}
          </span>
        </div>

        <div className="relative px-2 pb-4 sm:pr-8">
          <p className="text-coral-500 text-xs font-bold tracking-[0.18em] uppercase">
            Shelf note #{index + 1}
          </p>
          <h4 className="mt-3 text-2xl leading-tight sm:text-3xl">{active.title}</h4>
          <p className="text-muted mt-1 text-sm font-semibold">by {active.author}</p>
          <p className="mt-6 text-base leading-relaxed">{active.note}</p>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2" aria-label="Choose a book">
              {bookshelf.map((book, bookIndex) => (
                <button
                  key={book.title}
                  type="button"
                  onClick={() => show(bookIndex)}
                  aria-label={`Show ${book.title}`}
                  aria-current={bookIndex === index}
                  className={cn(
                    'border-ink h-3 rounded-full border-2 transition-all',
                    bookIndex === index ? 'bg-coral-500 w-8' : 'bg-surface w-3',
                  )}
                />
              ))}
            </div>
            <p className="text-muted text-xs font-bold">
              {index + 1} / {bookshelf.length}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => show(index - 1)}
        aria-label="Previous book"
        className="border-ink bg-surface shadow-hard absolute top-1/2 left-3 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border-2 sm:left-5"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => show(index + 1)}
        aria-label="Next book"
        className="border-ink bg-surface shadow-hard absolute top-1/2 right-3 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border-2 sm:right-5"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  )
}
