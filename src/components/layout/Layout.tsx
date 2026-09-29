import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (target) {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    window.scrollTo({ top: 0 })
  }, [location])

  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
