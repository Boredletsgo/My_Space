export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'phone'
}

export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  role: string
  taglines: string[]
  location: string
  email: string
  phone: string
  summary: string
  /** Path is resolved against the Vite base URL at render time. */
  resumePath: string
  socials: SocialLink[]
  nav: NavItem[]
  /** Formspree form id. Empty string falls back to a mailto: submission. */
  formspreeId: string
}

export interface Experience {
  company: string
  client?: string
  role: string
  note?: string
  period: string
  stack: string[]
  highlights: string[]
}

export interface Project {
  slug: string
  name: string
  tagline: string
  period: string
  highlights: string[]
  tags: string[]
  featured: boolean
  links?: { label: string; href: string }[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface EducationItem {
  institution: string
  qualification: string
  period: string
  detail?: string
}

export interface Publication {
  title: string
  venue: string
  href?: string
}

export interface Certification {
  name: string
  issuer: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readingTime: number
}

export interface BlogPost extends BlogPostMeta {
  html: string
}
