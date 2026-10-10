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
  phone: '+91 6360330773',
  summary:
    'I build AI systems for work, write to understand what I learn, and use this little corner of the internet to share both the engineer and the person behind the screen.',
  resumePath: 'Mahima_Sahu_Resume.pdf',
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
    { label: 'Notes', href: '/#notes' },
    { label: 'My corner', href: '/#my-corner' },
    { label: 'Things I build', href: '/#projects' },
    { label: 'Work', href: '/#work-highlights' },
    { label: 'Contact', href: '/#contact' },
  ],
  formspreeId: '',
}
