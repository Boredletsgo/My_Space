import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import Home from '@/pages/Home'

// Blog routes are code-split so the markdown bundle never loads on the landing page.
const BlogList = lazy(() => import('@/pages/BlogList'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function RouteFallback() {
  return <div className="py-24 text-center text-sm text-slate-500">Loading…</div>
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
