import { Menu, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ThemeToggle } from '@/components/layout/ThemeToggle'
import { Container } from '@/components/ui/Container'
import { site } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

function sectionId(href: string): string | null {
  return href.startsWith('/#') ? href.slice(2) : null
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const sectionIds = useMemo(
    () => site.nav.map((item) => sectionId(item.href)).filter((id): id is string => !!id),
    [],
  )
  const active = useActiveSection(location.pathname === '/' ? sectionIds : [])

  const goTo = (href: string) => {
    const id = sectionId(href)
    setOpen(false)

    if (!id) {
      navigate(href)
      return
    }

    if (location.pathname !== '/') {
      // Defer scrolling until the home route has actually mounted.
      navigate('/', { state: { scrollTo: id } })
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const isItemActive = (href: string) => {
    const id = sectionId(href)
    return id
      ? location.pathname === '/' && active === id
      : location.pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2">
      <Container>
        <div className="border-ink bg-surface shadow-hard flex h-16 items-center justify-between gap-4 rounded-full border-2 px-3 sm:px-5">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-display shrink-0 pl-2 text-base font-extrabold tracking-tight"
          >
            {site.name.split(' ')[0]}
            <span className="text-cobalt-500">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {site.nav.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => goTo(item.href)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  isItemActive(item.href)
                    ? 'border-ink bg-sun-400 text-ink border-2'
                    : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => goTo('/#contact')}
              className="border-ink bg-ink text-canvas hidden rounded-full border-2 px-5 py-2.5 text-sm font-bold transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Get in touch
            </button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="border-ink bg-surface grid size-10 place-items-center rounded-full border-2 md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-ink bg-surface shadow-hard mt-3 flex flex-col rounded-3xl border-2 p-2 md:hidden">
            {site.nav.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => goTo(item.href)}
                className={cn(
                  'rounded-2xl px-4 py-3 text-left text-sm font-semibold',
                  isItemActive(item.href) ? 'bg-sun-400 text-ink' : 'text-muted',
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </Container>
    </header>
  )
}
