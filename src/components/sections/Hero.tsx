import { ArrowRight, Download, Mail } from 'lucide-react'
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

const stats = [
  { value: '2+', label: 'Years shipping AI', tone: 'sun' as const },
  { value: '100+', label: 'Test scenarios traced', tone: 'cobalt' as const },
  { value: '~40%', label: 'Onboarding effort cut', tone: 'coral' as const },
]

const toneClass = {
  sun: 'bg-sun-400 text-ink',
  cobalt: 'bg-cobalt-500 text-white',
  coral: 'bg-coral-500 text-white',
}

export function Hero() {
  return (
    <section id="home" className="pt-6 pb-12 sm:pt-10 sm:pb-16">
      <Container>
        <div className="animate-fade-up border-ink bg-surface shadow-hard-lg overflow-hidden rounded-[2rem] border-2">
          <div className="border-ink border-b-2 px-6 py-10 sm:px-12 sm:py-16">
            <span className="border-ink bg-coral-500 mb-6 inline-flex items-center gap-2 rounded-full border-2 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase">
              <span className="size-2 rounded-full bg-white" />
              Open to work
            </span>

            <h1 className="font-display text-[2.6rem] leading-[0.95] tracking-[-0.03em] text-balance sm:text-7xl lg:text-[5.5rem]">
              Hi, I&apos;m {site.name.split(' ')[0]}! /
              <br />
              <span className="text-cobalt-500">{site.role}</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {site.taglines.map((tagline) => (
                <span
                  key={tagline}
                  className="border-ink bg-canvas rounded-full border-2 px-3.5 py-1.5 text-xs font-semibold"
                >
                  {tagline}
                </span>
              ))}
            </div>

            <p className="text-muted mt-8 max-w-2xl text-base leading-relaxed sm:text-lg">
              {site.summary}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <LinkButton href="#contact" variant="primary">
                Get in touch <ArrowRight className="size-4" />
              </LinkButton>
              <LinkButton
                href={asset(site.resumePath)}
                download
                variant="sun"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="size-4" /> Download resume
              </LinkButton>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 sm:px-12">
            <div className="flex items-center gap-3">
              <span className="border-ink bg-sun-400 font-display text-ink grid size-11 place-items-center rounded-full border-2 text-base font-extrabold">
                {site.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </span>
              <div>
                <p className="text-sm font-bold">{site.name}</p>
                <p className="text-muted text-xs font-medium">{site.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {site.socials.map((social) => {
                const Icon = icons[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={social.label}
                    className="border-ink hover:bg-sun-400 grid size-10 place-items-center rounded-full border-2 transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`border-ink shadow-hard rounded-3xl border-2 px-6 py-5 ${toneClass[stat.tone]}`}
            >
              <p className="font-display text-4xl leading-none font-extrabold">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
