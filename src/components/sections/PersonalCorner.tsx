import { BookHeart, Camera, Compass, Heart, Palette, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'
import { PersonalGallery } from '@/components/ui/PersonalGallery'
import { Section } from '@/components/ui/Section'
import {
  personalCornerCollections,
  type PersonalCornerCategory,
} from '@/data/personalCorner'
import { asset, cn } from '@/lib/utils'

const categoryStyle: Record<
  PersonalCornerCategory,
  {
    icon: ComponentType<{ className?: string }>
    color: string
    rotation: string
    span: string
  }
> = {
  art: {
    icon: Palette,
    color: 'bg-coral-500 text-white',
    rotation: 'lg:-rotate-1',
    span: 'lg:col-span-2',
  },
  memories: {
    icon: Camera,
    color: 'bg-cobalt-500 text-white',
    rotation: 'lg:rotate-1',
    span: 'lg:col-span-1',
  },
  hobbies: {
    icon: Heart,
    color: 'bg-sun-400 text-ink',
    rotation: 'lg:rotate-1',
    span: 'lg:col-span-1',
  },
  favorites: {
    icon: BookHeart,
    color: 'bg-surface text-ink',
    rotation: 'lg:-rotate-1',
    span: 'lg:col-span-1',
  },
  values: {
    icon: Compass,
    color: 'bg-cobalt-500 text-white',
    rotation: 'lg:rotate-1',
    span: 'lg:col-span-1',
  },
  curiosity: {
    icon: Sparkles,
    color: 'bg-sun-400 text-ink',
    rotation: 'lg:-rotate-1',
    span: 'lg:col-span-2',
  },
}

export function PersonalCorner() {
  return (
    <Section
      id="my-corner"
      eyebrow="My corner"
      title="Know the person, not just the profile."
      description="A scrapbook for the art, memories, interests, ideas, and tiny details that do not belong on a résumé—but still say something about who I am."
    >
      <div className="border-ink bg-surface shadow-hard-lg relative overflow-hidden rounded-[2rem] border-2 p-5 sm:p-8">
        <span
          className="bg-coral-400 border-ink absolute top-3 left-1/2 h-8 w-28 -translate-x-1/2 -rotate-2 border-x-2 opacity-80"
          aria-hidden
        />

        <div className="grid gap-6 pt-5 md:grid-cols-2 lg:grid-cols-3">
          {personalCornerCollections.map((collection) => {
            const style = categoryStyle[collection.category]
            const Icon = style.icon

            return (
              <article
                key={collection.category}
                className={cn(
                  'border-ink shadow-hard relative flex min-h-72 flex-col rounded-2xl border-2 p-5 transition-transform hover:rotate-0',
                  style.color,
                  style.rotation,
                  style.span,
                )}
              >
                <span className="border-ink bg-surface text-ink grid size-11 place-items-center rounded-full border-2">
                  <Icon className="size-5" />
                </span>

                <h3
                  className={cn(
                    'mt-6 text-2xl',
                    style.color.includes('text-white') && 'text-white dark:text-white',
                  )}
                >
                  {collection.title}
                </h3>
                <p
                  className={cn(
                    'mt-3 max-w-xl text-sm leading-relaxed',
                    style.color.includes('text-white') ? 'text-white/75' : 'text-muted',
                  )}
                >
                  {collection.prompt}
                </p>

                {collection.category === 'art' && collection.items.length > 0 ? (
                  <PersonalGallery items={collection.items} />
                ) : collection.items.length > 0 ? (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {collection.items.map((item) => {
                      const content = (
                        <>
                          {item.image && (
                            <img
                              src={asset(item.image)}
                              alt=""
                              className="border-ink aspect-square w-full rounded-xl border-2 object-cover"
                            />
                          )}
                          <p className="mt-3 text-sm font-bold">{item.title}</p>
                          {item.description && (
                            <p className="mt-1 text-xs opacity-75">{item.description}</p>
                          )}
                        </>
                      )

                      return item.href ? (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {content}
                        </a>
                      ) : (
                        <div key={item.title}>{content}</div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="border-ink/40 mt-auto rounded-xl border-2 border-dashed p-4">
                    <p className="text-xs font-bold tracking-[0.14em] uppercase opacity-65">
                      Ready for the first addition
                    </p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <p className="text-muted mt-9 text-center text-sm font-semibold">
          This corner is intentionally unfinished. It gets to grow as I do.
        </p>
      </div>
    </Section>
  )
}
