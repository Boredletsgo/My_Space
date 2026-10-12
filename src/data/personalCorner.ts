export type PersonalCornerCategory = 'art' | 'memories' | 'hobbies' | 'favorites'

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
        image: 'personal/art/crimson-moon.webp',
      },
      {
        title: 'Geometric Colour Study',
        group: 'Digital art',
        image: 'personal/art/geometric-color-study.webp',
      },
      {
        title: 'Minimal Rose',
        group: 'Digital art',
        image: 'personal/art/minimal-rose.webp',
      },
      {
        title: 'Pastel Crescent',
        group: 'Digital art',
        image: 'personal/art/pastel-crescent.webp',
      },
      {
        title: 'Clouds Before Dusk',
        group: 'Scenery',
        image: 'personal/art/cloudy-sky.webp',
      },
      {
        title: 'Garden Visitor',
        group: 'Scenery',
        image: 'personal/art/garden-visitor.webp',
      },
      {
        title: 'Bougainvillea in Bloom',
        group: 'Scenery',
        image: 'personal/art/bougainvillea.webp',
      },
    ],
  },
  {
    category: 'memories',
    title: 'Memory box',
    prompt: 'Photos, places, celebrations, and ordinary moments worth keeping.',
    items: [
      {
        title: 'Books, books, books',
        description: 'A very predictable place to lose track of time.',
        image: 'personal/memories/books-and-browsing.webp',
      },
      {
        title: 'A day among stories',
        description: 'Wandering through the Bangalore Literature Festival.',
        image: 'personal/memories/literature-festival.webp',
      },
      {
        title: 'Bubble tea intermission',
        description: 'Because every serious literary outing needs a snack break.',
        image: 'personal/memories/bubble-tea-break.webp',
      },
      {
        title: 'Made a fluffy friend',
        description: 'The cat was clearly the main character here.',
        image: 'personal/memories/cat-cafe.webp',
      },
    ],
  },
  {
    category: 'hobbies',
    title: 'Currently curious about',
    prompt:
      'New skills, impossible plans, and rabbit holes with absolutely no respect for a five-year plan.',
    items: [],
  },
  {
    category: 'favorites',
    title: 'On my shelf',
    prompt:
      'Fantasy worlds, curious minds, human behaviour, and the occasional attempt to build better habits.',
    items: [],
  },
]
