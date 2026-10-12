import {
  BadgeDollarSign,
  BookOpen,
  Bot,
  Brain,
  CircleHelp,
  CircleUserRound,
  FlaskConical,
  Languages,
  PenLine,
  Rocket,
  Scissors,
  Search,
  Sprout,
} from 'lucide-react'
import { useState, type ComponentType } from 'react'
import { mainCuriosities, rabbitHoles, type CuriosityIcon } from '@/data/curiosities'
import { cn } from '@/lib/utils'

const icons: Record<CuriosityIcon, ComponentType<{ className?: string }>> = {
  scissors: Scissors,
  adulting: CircleUserRound,
  money: BadgeDollarSign,
  languages: Languages,
  brain: Brain,
  bot: Bot,
  search: Search,
  book: BookOpen,
  sprout: Sprout,
  pen: PenLine,
  experiment: FlaskConical,
}

const tabColors = [
  'bg-coral-500',
  'bg-cobalt-500',
  'bg-surface',
  'bg-sun-300',
  'bg-cobalt-500',
]

const rabbitColors = [
  'bg-sun-300',
  'bg-cobalt-500 text-white',
  'bg-coral-400 text-white',
  'bg-surface',
  'bg-cobalt-500 text-white',
  'bg-sun-300',
]

export function CuriosityBoard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = mainCuriosities[activeIndex]
  const ActiveIcon = icons[active.icon]

  return (
    <div className="border-ink bg-surface shadow-hard-lg mt-7 overflow-hidden rounded-2xl border-2">
      <div className="border-ink bg-ink flex flex-wrap items-center gap-2 border-b-2 px-4 pt-3">
        <div className="mb-3 flex gap-1.5" aria-hidden>
          <span className="bg-coral-500 size-3 rounded-full border border-white/30" />
          <span className="bg-sun-400 size-3 rounded-full border border-white/30" />
          <span className="bg-cobalt-400 size-3 rounded-full border border-white/30" />
        </div>
        <div
          role="tablist"
          aria-label="Curiosity tabs"
          className="flex min-w-0 flex-1 gap-1 overflow-x-auto"
        >
          {mainCuriosities.map((item, index) => {
            const Icon = icons[item.icon]
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="active-curiosity-panel"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'border-ink flex min-w-16 shrink-0 items-center justify-center rounded-t-lg border-2 border-b-0 px-3 py-2 transition-all',
                  tabColors[index],
                  activeIndex === index
                    ? 'relative z-10 -mb-0.5 translate-y-0.5 pb-3'
                    : 'opacity-65 hover:opacity-100',
                )}
                title={item.title}
                aria-label={`Open ${item.title}`}
              >
                <span className="border-ink grid size-8 place-items-center rounded-full border-2 bg-white text-black">
                  <Icon className="size-4" />
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative overflow-hidden p-5 sm:p-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
            backgroundSize: '18px 18px',
          }}
          aria-hidden
        />

        <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-coral-500 text-xs font-black tracking-[0.2em] uppercase">
              Brain browser · session restored
            </p>
            <h4 className="mt-2 text-3xl leading-tight sm:text-4xl">
              47 tabs open.
              <br />
              <span className="text-cobalt-500">Zero paying rent.</span>
            </h4>
          </div>
          <span className="border-ink bg-sun-400 shadow-hard -rotate-2 rounded-full border-2 px-4 py-2 text-xs font-black whitespace-nowrap uppercase">
            Please do not close
          </span>
        </div>

        <article
          id="active-curiosity-panel"
          role="tabpanel"
          className={cn(
            'border-ink shadow-hard group relative mt-9 min-h-64 overflow-hidden rounded-2xl border-2 p-6 transition-colors sm:p-8',
            active.color,
            active.rotation,
          )}
        >
          <span
            className="border-ink absolute -top-4 -right-4 grid size-24 rotate-6 place-items-center rounded-full border-2 bg-white text-black transition-transform group-hover:rotate-12"
            aria-hidden
          >
            <ActiveIcon className="size-10" />
          </span>
          <div className="flex items-center gap-3">
            <span className="text-6xl font-black opacity-15" aria-hidden>
              0{activeIndex + 1}
            </span>
            <span
              className={cn(
                'rounded-full border-2 px-3 py-1 text-xs font-black tracking-[0.14em] uppercase',
                active.color.includes('text-white')
                  ? 'border-white/50 text-white'
                  : 'border-ink',
              )}
            >
              Tab {activeIndex + 1} of {mainCuriosities.length}
            </span>
          </div>
          <h5
            className={cn(
              'mt-7 max-w-2xl text-3xl leading-tight sm:text-4xl',
              active.color.includes('text-white') && 'text-white dark:text-white',
            )}
          >
            {active.title}
          </h5>
          <p
            className={cn(
              'mt-4 max-w-2xl text-base leading-relaxed sm:text-lg',
              active.color.includes('text-white') ? 'text-white/80' : 'text-muted',
            )}
          >
            {active.note}
          </p>
          <span
            className="bg-surface/50 absolute bottom-4 left-1/2 h-5 w-28 -translate-x-1/2 rotate-1"
            aria-hidden
          />
        </article>

        <div className="border-ink bg-canvas shadow-hard relative mt-10 rotate-[0.4deg] rounded-2xl border-2 p-5 sm:p-7">
          <span
            className="bg-coral-300 border-ink absolute -top-3 left-8 h-7 w-24 -rotate-3 border-x-2 opacity-90"
            aria-hidden
          />
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-coral-500 text-xs font-black tracking-[0.18em] uppercase">
                Background processes
              </p>
              <h5 className="mt-2 text-2xl">Tabs I refuse to close</h5>
            </div>
            <span className="text-muted text-xs font-bold">6 still running</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rabbitHoles.map((item, index) => {
              const Icon = icons[item.icon]
              return (
                <article
                  key={item.title}
                  className={cn(
                    'border-ink shadow-hard rounded-xl border-2 p-4 transition-transform hover:-translate-y-1',
                    rabbitColors[index],
                    index % 2 === 0 ? '-rotate-[0.5deg]' : 'rotate-[0.5deg]',
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="border-ink grid size-11 shrink-0 place-items-center rounded-full border-2 bg-white text-black"
                      aria-hidden
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="leading-tight font-bold">{item.title}</p>
                      <p
                        className={cn(
                          'mt-2 text-xs leading-relaxed',
                          rabbitColors[index].includes('text-white')
                            ? 'text-white/80'
                            : 'text-muted',
                        )}
                      >
                        {item.note}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="relative mt-9 flex justify-center">
          <p className="border-ink bg-ink text-canvas shadow-hard flex rotate-1 flex-wrap items-center justify-center gap-2 rounded-full border-2 px-5 py-2 text-center text-xs font-bold sm:text-sm">
            <CircleHelp className="size-4" />
            Progress: questionable
            <span className="opacity-50">·</span>
            <Rocket className="size-4" />
            Enthusiasm: dangerously high
          </p>
        </div>
      </div>
    </div>
  )
}
