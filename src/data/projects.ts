import type { Project } from '@/types/content'

export const projects: Project[] = [
  {
    slug: 'story-scout',
    name: 'Story_Scout',
    tagline: 'Multi-Agent RAG Recommendation Platform',
    period: '2025 – Present',
    featured: true,
    tags: ['LangGraph', 'RAG', 'Vector DB', 'Agent Memory', 'Python'],
    highlights: [
      'Built a production-grade multi-agent book recommendation system using LangGraph, RAG, vector databases, and memory systems for personalized, context-aware reasoning.',
      'Designed agent orchestration and retrieval pipelines to generate recommendations grounded in user history rather than static filtering.',
    ],
  },
  {
    slug: 'uprate',
    name: 'UpRate',
    tagline: 'AI Assessment & Mentorship Platform',
    period: '2024 – Present',
    featured: true,
    tags: ['Azure OpenAI', 'Flask', 'LangChain', 'SQLAlchemy', 'Azure App Service'],
    highlights: [
      'Designed and developed an AI-powered assessment and mentorship platform with personalized candidate evaluation using Azure OpenAI and Python/Flask.',
      'Built resume intelligence workflows for automated profile generation, skill extraction, and candidate scoring using LangChain and SQLAlchemy.',
      'Developed configurable evaluation pipelines with automated scoring, feedback generation, and REST APIs deployed on Azure App Service.',
    ],
  },
  {
    slug: 'ai-log-analyzer',
    name: 'AI Log Analyzer',
    tagline: 'LLM-assisted root-cause investigation',
    period: '2024',
    featured: true,
    tags: ['Python', 'LangChain', 'NLP', 'Observability'],
    highlights: [
      'Built an AI-assisted log analysis platform using Python and LangChain to detect anomalies and accelerate root-cause investigation across test deployments.',
      'Implemented automated log parsing, summarization, and intelligent classification workflows reducing mean time to diagnosis.',
    ],
  },
  {
    slug: 'mentlaza',
    name: 'MENTLAZA',
    tagline: 'Emotion Recognition Platform',
    period: '2023',
    featured: false,
    tags: ['DeepFace', 'OpenCV', 'Computer Vision'],
    highlights: [
      'Developed a real-time emotion recognition system using DeepFace and OpenCV, achieving 96% classification accuracy across 7 emotion categories.',
    ],
  },
  {
    slug: 'senti',
    name: 'SENTI',
    tagline: 'Voice Sentiment Analysis',
    period: '2023',
    featured: false,
    tags: ['Speech Recognition', 'NLP', 'VADER'],
    highlights: [
      'Built a voice sentiment analysis system combining speech recognition, NLP, and VADER to classify emotional tone from live audio input.',
    ],
  },
]
