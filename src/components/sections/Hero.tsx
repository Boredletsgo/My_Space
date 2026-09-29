import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
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
    <section id="home" className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div
        aria-hidden
        className="from-brand-200/50 dark:from-brand-900/40 pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full bg-gradient-to-br to-transparent blur-3xl"
      />
      <Container className="relative">
        <div className="animate-fade-up max-w-3xl">
          <p className="border-brand-200 text-brand-700 dark:border-brand-800 dark:text-brand-300 mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
            <span className="bg-brand-500 size-1.5 rounded-full" />
            Open to AI engineering collaborations
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            {site.name}
          </h1>

          <p className="text-brand-600 dark:text-brand-400 mt-3 text-lg font-semibold sm:text-xl">
            {site.role}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            {site.taglines.map((tagline) => (
              <span
                key={tagline}
                className="after:ml-3 after:content-['•'] last:after:content-['']"
              >
                {tagline}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {site.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton href="#contact">
              Get in touch <ArrowRight className="size-4" />
            </LinkButton>
            <LinkButton
              href={asset(site.resumePath)}
              download
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="size-4" /> Download resume
            </LinkButton>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" /> {site.location}
            </span>
            {site.socials.map((social) => {
              const Icon = icons[social.icon]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <Icon className="size-5" />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
