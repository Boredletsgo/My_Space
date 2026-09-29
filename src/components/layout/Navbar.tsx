import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const sectionIds = useMemo(
    () => site.nav.map((item) => sectionId(item.href)).filter((id): id is string => !!id),
    [],
  )
  const active = useActiveSection(location.pathname === '/' ? sectionIds : [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-200',
        scrolled
          ? 'border-b border-slate-200 bg-white/85 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85'
          : 'border-b border-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-brand-600 dark:text-brand-400 text-sm font-bold tracking-[0.18em] uppercase"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const id = sectionId(item.href)
            const isActive = id
              ? location.pathname === '/' && active === id
              : location.pathname.startsWith(item.href)

            return (
              <button
                key={item.href}
                type="button"
                onClick={() => goTo(item.href)}
                className={cn(
                  'hover:text-brand-600 dark:hover:text-brand-400 rounded-full px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-600 dark:text-slate-400',
                )}
              >
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-full border border-slate-200 p-2 text-slate-600 md:hidden dark:border-slate-700 dark:text-slate-300"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950">
          <Container className="flex flex-col py-2">
            {site.nav.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => goTo(item.href)}
                className="hover:text-brand-600 dark:hover:text-brand-400 py-3 text-left text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {item.label}
              </button>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
