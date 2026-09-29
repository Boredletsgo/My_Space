import type { Certification, EducationItem, Publication } from '@/types/content'

export const education: EducationItem[] = [
  {
    institution: 'Birla Institute of Technology and Science, Pilani',
    qualification: 'M.Tech, Artificial Intelligence and Machine Learning',
    period: '2026 – 2028',
  },
  {
    institution: 'Sri Sairam College of Engineering, VTU',
    qualification: 'B.E. Computer Science and Engineering (Honors)',
    period: 'Graduated 2024',
    detail: 'CGPA 8.43 / 10',
  },
]

export const certifications: Certification[] = [
  { name: 'Azure AI Engineer Associate (AI-102)', issuer: 'Microsoft Certified' },
  {
    name: 'Azure AI Apps and Agents Developer Associate (AI-103)',
    issuer: 'Microsoft Certified',
  },
  { name: 'Azure Data Scientist Associate (DP-100)', issuer: 'Microsoft Certified' },
  {
    name: 'Security, Compliance & Identity Fundamentals (SC-900)',
    issuer: 'Microsoft Certified',
  },
  { name: 'GitHub Copilot Certification (GH-300)', issuer: 'GitHub' },
]

export const publications: Publication[] = [
  {
    title:
      'Addressing the Challenges of Handling Missing Data in Data Science Applications',
    venue: 'IJIRIS, 2023',
    href: 'https://doi.org/10.26562/ijiris.2023.v0903.05',
  },
  {
    title: 'Sentiment Analysis of Incoming Voice Calls',
    venue: 'IJISRT, Jul 2024',
  },
]
