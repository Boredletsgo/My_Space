import type { SiteConfig } from '@/types/content'

export const site: SiteConfig = {
  name: 'Mahima Sahu',
  role: 'AI Engineer',
  taglines: [
    'Agentic AI',
    'MCP',
    'LLM Systems',
    'Python',
    'Azure',
    'Backend Engineering',
  ],
  location: 'India',
  email: 'mahimasahu6697@gmail.com',
  summary:
    'I build AI systems for work, write to understand what I learn, and use this little corner of the internet to share both the engineer and the person behind the screen.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Boredletsgo', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mahima-sahu',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:mahimasahu6697@gmail.com', icon: 'mail' },
  ],
  nav: [
    { label: 'My story', href: '/#about' },
    { label: 'Work', href: '/#work-highlights' },
    { label: 'Notes', href: '/#notes' },
    { label: 'My corner', href: '/#my-corner' },
    { label: 'Professional', href: '/#professional' },
    { label: 'Contact', href: '/#contact' },
  ],
  formspreeId: '',
}
