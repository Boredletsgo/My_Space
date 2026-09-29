import { Mail } from 'lucide-react'
import type { ComponentType } from 'react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'
import type { SocialLink } from '@/types/content'

const icons: Record<SocialLink['icon'], ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  phone: Mail,
}

export function Footer() {
  return (
    <footer className="pt-8 pb-10">
      <Container>
        <div className="border-ink bg-ink text-canvas shadow-hard flex flex-col items-center justify-between gap-5 rounded-3xl border-2 px-6 py-7 sm:flex-row">
          <p className="text-center text-sm font-medium sm:text-left">
            © {new Date().getFullYear()} {site.name} — built with React, Vite & Tailwind.
          </p>
          <div className="flex items-center gap-3">
            {site.socials.map((social) => {
              const Icon = icons[social.icon]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="border-canvas text-canvas hover:bg-sun-400 hover:text-ink hover:border-sun-400 grid size-10 place-items-center rounded-full border-2 transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
