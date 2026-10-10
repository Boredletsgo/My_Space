export type WorkHighlightKind = 'certificate' | 'appreciation' | 'milestone'

export interface WorkHighlight {
  title: string
  kind: WorkHighlightKind
  description: string
  date?: string
  expires?: string
  issuer?: string
  image?: string
  href?: string
}

export const workHighlights: WorkHighlight[] = [
  {
    kind: 'certificate',
    title: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    date: 'Issued February 2026',
    expires: 'Expires February 2027',
    description: 'Associate certification in applied data science on Microsoft Azure.',
    image: 'work/certificates/azure-data-scientist-associate.png',
    href: 'https://learn.microsoft.com/api/credentials/share/en-us/MahimaSahu-4383/23E7E0ADD4FC2212?sharingId=72A6E6B81B7B9A53',
  },
  {
    kind: 'certificate',
    title: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate',
    issuer: 'Microsoft',
    date: 'Issued September 2026',
    expires: 'Expires September 2027',
    description: 'Associate certification in developing Azure AI apps and agents.',
    image: 'work/certificates/azure-ai-apps-agents-developer.png',
    href: 'https://learn.microsoft.com/api/credentials/share/en-us/MahimaSahu-4383/D954FEFA47ED6F19?sharingId=72A6E6B81B7B9A53',
  },
  {
    kind: 'certificate',
    title: 'Microsoft Certified: Agentic AI Business Solutions Architect Expert',
    issuer: 'Microsoft',
    date: 'Issued September 2026',
    expires: 'Expires September 2027',
    description: 'Expert certification in architecting agentic AI business solutions.',
    image: 'work/certificates/agentic-ai-solutions-architect.png',
    href: 'https://learn.microsoft.com/api/credentials/share/en-us/MahimaSahu-4383/E2AFCFF5D57B2EA?sharingId=72A6E6B81B7B9A53',
  },
  {
    kind: 'certificate',
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    date: 'Issued January 2026',
    description: 'Foundational certification in security, compliance, and identity.',
    image: 'work/certificates/security-compliance-identity-fundamentals.png',
    href: 'https://learn.microsoft.com/api/credentials/share/en-us/MahimaSahu-4383/FF8978E71F2A897E?sharingId=72A6E6B81B7B9A53',
  },
  {
    kind: 'certificate',
    title: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Issued February 2026',
    expires: 'Expires February 2029',
    description:
      'Specialty certification in designing and implementing ML solutions on AWS.',
    image: 'work/certificates/aws-machine-learning-specialty.png',
    href: 'https://www.linkedin.com/safety/go/?url=https%3A%2F%2Faws.amazon.com%2Fverification&urlhash=uj32&mt=n2X43K_ig9rN36t6MWX-bhePPB_e98msfEpcRRUmqjFaX0yNBAXN8umR6MmPgRNE06-C05psEEeKdVDuGAGyAf5uKLs&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BXnJI4x3XSwqpew8GlXX9FA%3D%3D',
  },
  {
    kind: 'appreciation',
    title: 'Pat on the Back Award',
    issuer: 'Tech Mahindra',
    description:
      'Recognized for dependable performance, a positive attitude, and consistent contributions that help the team deliver better together.',
    image: 'work/appreciation/pat-on-the-back-award.png',
    href: 'https://lnkd.in/p/gF_MgtQt',
  },
  {
    kind: 'appreciation',
    title: 'Standing Ovation Award',
    issuer: 'Tech Mahindra',
    date: 'Awarded December 2025',
    description:
      'Recognized for outstanding contribution, energy, enthusiasm, and expertise.',
    image: 'work/appreciation/standing-ovation-award.png',
    href: 'https://lnkd.in/p/gHDWByBk',
  },
  {
    kind: 'appreciation',
    title: 'Exceptional Contribution',
    issuer: 'Tech Mahindra',
    description:
      'Recognition for making an exceptional contribution alongside fellow team members.',
    image: 'work/appreciation/exceptional-contribution.png',
    href: 'https://lnkd.in/p/gEhTGANx',
  },
  {
    kind: 'milestone',
    title: 'B.E. (Hons.) Graduation',
    issuer: 'Sri Sairam College of Engineering',
    description:
      'Graduated with a Bachelor of Engineering with Honours—a milestone that represents years of learning, persistence, and growth.',
    image: 'work/milestones/be-honours-graduation.png',
    href: 'https://lnkd.in/p/g7Fi3Arz',
  },
  {
    kind: 'milestone',
    title: 'One Year at Tech Mahindra',
    issuer: 'Tech Mahindra',
    description:
      'Celebrating the first year of professional growth, collaboration, and meaningful engineering work at Tech Mahindra.',
    image: 'work/milestones/one-year-at-tech-mahindra.png',
    href: 'https://lnkd.in/p/gYER-BbZ',
  },
  {
    kind: 'milestone',
    title: 'CodeRush - Security Track',
    issuer: 'Microsoft × Tech Mahindra',
    description:
      'Designed and scripted security test scenarios for AI systems, exploring prompt injection, unsafe model responses, data leakage, and AI misuse vectors.',
    image: 'work/milestones/coderush-security-track.png',
    href: 'https://lnkd.in/p/geyBcjju',
  },
]
