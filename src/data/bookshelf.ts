export interface BookshelfItem {
  title: string
  author: string
  note: string
  status: 'read' | 'reading'
  coverClass: string
  accentClass: string
  symbol: string
}

export const bookshelf: BookshelfItem[] = [
  {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    note: 'The series that made hidden worlds, found family, and a little everyday magic feel entirely possible.',
    status: 'read',
    coverClass: 'bg-[#38145f] text-white',
    accentClass: 'bg-sun-400 text-ink',
    symbol: '⚡',
  },
  {
    title: 'Percy Jackson',
    author: 'Rick Riordan',
    note: 'Greek mythology, chaotic quests, and proof that saving the world can still involve excellent sarcasm.',
    status: 'read',
    coverClass: 'bg-[#087f8c] text-white',
    accentClass: 'bg-sun-400 text-ink',
    symbol: 'Ψ',
  },
  {
    title: "Alice's Adventures in Wonderland",
    author: 'Lewis Carroll',
    note: 'Wonderfully strange, delightfully curious, and a reminder that imagination does not need to behave logically.',
    status: 'read',
    coverClass: 'bg-coral-500 text-white',
    accentClass: 'bg-surface text-ink',
    symbol: '♠',
  },
  {
    title: 'The Definitive Book of Body Language',
    author: 'Allan & Barbara Pease',
    note: 'A fascinating look at all the conversations happening before anybody says a word.',
    status: 'read',
    coverClass: 'bg-cobalt-500 text-white',
    accentClass: 'bg-sun-400 text-ink',
    symbol: '☞',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    note: 'Tiny choices, repeated often—the slightly less dramatic but far more useful version of changing your life overnight.',
    status: 'read',
    coverClass: 'bg-sun-400 text-ink',
    accentClass: 'bg-ink text-canvas',
    symbol: '↻',
  },
  {
    title: 'The Power of Your Subconscious Mind',
    author: 'Joseph Murphy',
    note: 'Currently exploring what the mind quietly believes, repeats, and turns into everyday behaviour.',
    status: 'reading',
    coverClass: 'bg-[#172019] text-white',
    accentClass: 'bg-coral-500 text-white',
    symbol: '◉',
  },
]
