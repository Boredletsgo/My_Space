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
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {site.name}. Built with React, Vite & Tailwind.
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
                className="hover:text-brand-600 dark:hover:text-brand-400 text-slate-500 transition-colors"
              >
                <Icon className="size-5" />
              </a>
            )
          })}
        </div>
      </Container>
    </footer>
  )
}
