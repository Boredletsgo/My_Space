import { ArrowDownRight, ArrowRight, Download, Mail, Sparkles } from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { LinkButton } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'
import { asset } from '@/lib/utils'
import type { SocialLink } from '@/types/content'

const icons: Record<SocialLink['icon'], ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  phone: Mail,
}

export function Hero() {
  return (
    <section id="home" className="pt-8 pb-12 sm:pt-14 sm:pb-20">
      <Container>
        <div className="animate-fade-up grid items-stretch gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="border-ink bg-surface shadow-hard-lg rounded-[2.5rem] border-2 px-7 py-12 sm:px-12 sm:py-16">
            <span className="text-cobalt-500 mb-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="size-4" />
              Engineer · Writer · Work in progress
            </span>

            <h1 className="font-display max-w-4xl text-[3.25rem] leading-[0.98] tracking-[-0.035em] text-balance sm:text-7xl lg:text-[5.4rem]">
              Building useful AI,
              <span className="text-coral-500"> collecting stories</span> along the way.
            </h1>

            <p className="text-muted mt-8 max-w-2xl text-base leading-relaxed sm:text-xl">
              Hi, I&apos;m {site.name.split(' ')[0]}. {site.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <LinkButton href="#about" variant="primary">
                Meet the person <ArrowDownRight className="size-4" />
              </LinkButton>
              <LinkButton href="/blog" variant="outline">
                Read my notes <ArrowRight className="size-4" />
              </LinkButton>
            </div>
          </div>

          <aside className="border-ink bg-cobalt-500 shadow-hard-lg flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-[2.5rem] border-2 p-7 text-white sm:p-9">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase opacity-70">
                Currently exploring
              </p>
              <p className="font-display mt-5 text-3xl leading-tight text-white dark:text-white">
                How thoughtful AI tools can make complicated work feel a little more human.
              </p>
            </div>

            <div>
              <div className="mb-7 flex flex-wrap gap-2">
                {site.taglines.slice(0, 4).map((tagline) => (
                  <span
                    key={tagline}
                    className="rounded-full border border-white/40 px-3 py-1.5 text-xs font-semibold"
                  >
                    {tagline}
                  </span>
                ))}
              </div>

              <span className="bg-sun-400 font-display text-ink grid size-14 place-items-center rounded-full text-lg font-bold">
                {site.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </span>
              <p className="mt-4 font-bold">{site.name}</p>
              <p className="mt-1 text-sm text-white/70">
                {site.role} · {site.location}
              </p>

              <div className="mt-5 flex items-center gap-2">
                {site.socials.map((social) => {
                  const Icon = icons[social.icon]
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      aria-label={social.label}
                      className="grid size-10 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-cobalt-600"
                    >
                      <Icon className="size-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-5 flex justify-end">
          <LinkButton
            href={asset(site.resumePath)}
            download
            variant="outline"
            target="_blank"
            rel="noreferrer"
            className="shadow-none"
          >
            <Download className="size-4" /> Prefer the formal version? Download résumé
          </LinkButton>
        </div>
      </Container>
    </section>
  )
}
