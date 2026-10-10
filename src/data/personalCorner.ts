export type PersonalCornerCategory =
  'art' | 'memories' | 'hobbies' | 'favorites' | 'values' | 'curiosity'

export interface PersonalCornerItem {
  title: string
  description?: string
  group?: string
  image?: string
  href?: string
}

export interface PersonalCornerCollection {
  category: PersonalCornerCategory
  title: string
  prompt: string
  items: PersonalCornerItem[]
}

export const personalCornerCollections: PersonalCornerCollection[] = [
  {
    category: 'art',
    title: 'Creative drawer',
    prompt:
      'Digital art, sketches, experiments, and anything made just for the joy of it.',
    items: [
      {
        title: 'Crimson Moon',
        group: 'Digital art',
        image: 'personal/art/crimson-moon.png',
      },
      {
        title: 'Geometric Colour Study',
        group: 'Digital art',
        image: 'personal/art/geometric-color-study.png',
      },
      {
        title: 'Minimal Rose',
        group: 'Digital art',
        image: 'personal/art/minimal-rose.png',
      },
      {
        title: 'Clouds Before Dusk',
        group: 'Scenery',
        image: 'personal/art/cloudy-sky.png',
      },
      {
        title: 'Garden Visitor',
        group: 'Scenery',
        image: 'personal/art/garden-visitor.png',
      },
      {
        title: 'Bougainvillea in Bloom',
        group: 'Scenery',
        image: 'personal/art/bougainvillea.png',
      },
    ],
  },
  {
    category: 'memories',
    title: 'Memory box',
    prompt: 'Photos, places, celebrations, and ordinary moments worth keeping.',
    items: [],
  },
  {
    category: 'hobbies',
    title: 'Little joys',
    prompt: 'The hobbies, rituals, and small things that make an ordinary day better.',
    items: [],
  },
  {
    category: 'favorites',
    title: 'On my shelf',
    prompt: 'Books, films, music, creators, and stories I keep returning to.',
    items: [],
  },
  {
    category: 'values',
    title: 'Things I believe',
    prompt: 'Values, quirks, reminders, and a few truths I try to carry with me.',
    items: [],
  },
  {
    category: 'curiosity',
    title: 'Currently curious about',
    prompt: 'Questions, ideas, and rabbit holes taking up space in my mind right now.',
    items: [],
  },
]
