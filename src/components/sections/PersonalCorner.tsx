import { BookHeart, Brain, Camera, Palette } from 'lucide-react'
import { useState, type ComponentType } from 'react'
import { BookshelfCarousel } from '@/components/ui/BookshelfCarousel'
import { CuriosityBoard } from '@/components/ui/CuriosityBoard'
import { MemoryCarousel } from '@/components/ui/MemoryCarousel'
import { PersonalGallery } from '@/components/ui/PersonalGallery'
import { Section } from '@/components/ui/Section'
import {
  personalCornerCollections,
  type PersonalCornerCategory,
} from '@/data/personalCorner'
import { cn } from '@/lib/utils'

const categoryStyle: Record<
  PersonalCornerCategory,
  {
    icon: ComponentType<{ className?: string }>
    color: string
    tabColor: string
    rotation: string
  }
> = {
  art: {
    icon: Palette,
    color: 'bg-coral-500 text-white',
    tabColor: 'bg-coral-500 text-white',
    rotation: 'lg:-rotate-[0.4deg]',
  },
  memories: {
    icon: Camera,
    color: 'bg-cobalt-500 text-white',
    tabColor: 'bg-cobalt-500 text-white',
    rotation: 'lg:rotate-[0.4deg]',
  },
  hobbies: {
    icon: Brain,
    color: 'bg-sun-400 text-ink',
    tabColor: 'bg-sun-400 text-ink',
    rotation: 'lg:-rotate-[0.4deg]',
  },
  favorites: {
    icon: BookHeart,
    color: 'bg-surface text-ink',
    tabColor: 'bg-surface text-ink',
    rotation: 'lg:rotate-[0.4deg]',
  },
}

export function PersonalCorner() {
  const [activeCategory, setActiveCategory] = useState<PersonalCornerCategory>('art')
  const collection =
    personalCornerCollections.find((item) => item.category === activeCategory) ??
    personalCornerCollections[0]
  const style = categoryStyle[collection.category]
  const Icon = style.icon

  return (
    <Section
      id="my-corner"
      eyebrow="My corner"
      title="Know the person, not just the profile."
      description="Open one drawer at a time: art, memories, current obsessions, and the stories waiting on my shelf."
    >
      <div
        role="tablist"
        aria-label="Explore my personal corner"
        className="mb-6 flex gap-3 overflow-x-auto px-1 pt-1 pb-3"
      >
        {personalCornerCollections.map((item, index) => {
          const tabStyle = categoryStyle[item.category]
          const TabIcon = tabStyle.icon
          const selected = item.category === activeCategory

          return (
            <button
              key={item.category}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="personal-corner-panel"
              onClick={() => setActiveCategory(item.category)}
              className={cn(
                'border-ink flex shrink-0 items-center gap-2 rounded-full border-2 px-4 py-2.5 text-sm font-bold transition-all',
                selected
                  ? `${tabStyle.tabColor} shadow-hard -translate-y-0.5`
                  : 'bg-surface text-muted hover:text-ink',
                index % 2 === 0 ? '-rotate-1' : 'rotate-1',
              )}
            >
              <TabIcon className="size-4" />
              {item.title}
            </button>
          )
        })}
      </div>

      <article
        id="personal-corner-panel"
        role="tabpanel"
        className={cn(
          'border-ink shadow-hard-lg relative min-h-72 overflow-hidden rounded-[2rem] border-2 p-5 transition-colors sm:p-8',
          style.color,
          style.rotation,
        )}
      >
        <span
          className="bg-coral-300 border-ink absolute top-3 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 border-x-2 opacity-80"
          aria-hidden
        />

        <div className="relative pt-5">
          <span className="border-ink bg-surface text-ink grid size-11 place-items-center rounded-full border-2">
            <Icon className="size-5" />
          </span>

          <h3
            className={cn(
              'mt-6 text-2xl sm:text-3xl',
              style.color.includes('text-white') && 'text-white dark:text-white',
            )}
          >
            {collection.title}
          </h3>
          <p
            className={cn(
              'mt-3 max-w-2xl text-sm leading-relaxed sm:text-base',
              style.color.includes('text-white') ? 'text-white/75' : 'text-muted',
            )}
          >
            {collection.prompt}
          </p>

          {collection.category === 'art' ? (
            <PersonalGallery items={collection.items} />
          ) : collection.category === 'memories' ? (
            <div className="max-w-lg">
              <MemoryCarousel items={collection.items} />
            </div>
          ) : collection.category === 'hobbies' ? (
            <CuriosityBoard />
          ) : (
            <BookshelfCarousel />
          )}
        </div>
      </article>

      <p className="text-muted mt-7 text-center text-sm font-semibold">
        This corner is intentionally unfinished. It gets to grow as I do.
      </p>
    </Section>
  )
}
