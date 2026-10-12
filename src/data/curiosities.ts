export type CuriosityIcon =
  | 'scissors'
  | 'adulting'
  | 'money'
  | 'languages'
  | 'brain'
  | 'bot'
  | 'search'
  | 'book'
  | 'sprout'
  | 'pen'
  | 'experiment'

export interface Curiosity {
  icon: CuriosityIcon
  title: string
  note: string
  color: string
  rotation: string
}

export const mainCuriosities: Curiosity[] = [
  {
    icon: 'scissors',
    title: 'Learning to crochet',
    note: 'Because apparently I need another hobby that requires patience I do not possess.',
    color: 'bg-coral-500 text-white',
    rotation: '-rotate-1',
  },
  {
    icon: 'adulting',
    title: 'Learning how to adult',
    note: 'Paying bills, making good decisions, keeping plants alive, and surviving without a user manual.',
    color: 'bg-cobalt-500 text-white',
    rotation: 'rotate-1',
  },
  {
    icon: 'money',
    title: 'Magically becoming rich',
    note: 'Open to hard work, smart investments, and suspiciously convenient plot twists.',
    color: 'bg-surface text-ink',
    rotation: 'rotate-1',
  },
  {
    icon: 'languages',
    title: 'Becoming a polyglot',
    note: 'Collecting languages like Pokémon and hoping my brain has enough storage.',
    color: 'bg-sun-300 text-ink',
    rotation: '-rotate-1',
  },
  {
    icon: 'brain',
    title: 'Studying psychology',
    note: 'In pursuit of becoming Professor X—minus the mind-reading ethics paperwork.',
    color: 'bg-cobalt-500 text-white',
    rotation: '-rotate-1',
  },
]

export const rabbitHoles: Pick<Curiosity, 'icon' | 'title' | 'note'>[] = [
  {
    icon: 'bot',
    title: 'Making AI do my chores',
    note: 'If it can write code, surely it can fold laundry.',
  },
  {
    icon: 'search',
    title: 'Understanding human behaviour',
    note: 'Mostly to understand myself, but the plot thickens.',
  },
  {
    icon: 'book',
    title: 'Knowing suspiciously random facts',
    note: 'Smartest in the room—or at least interesting at dinner.',
  },
  {
    icon: 'sprout',
    title: 'Having my life together',
    note: 'Organised, stable, and thriving. Preferably by Tuesday.',
  },
  {
    icon: 'pen',
    title: 'Writing without fighting English',
    note: 'The thoughts are there; the sentences are buffering.',
  },
  {
    icon: 'experiment',
    title: 'Trying things I am not good at yet',
    note: 'Character development, but make it a side quest.',
  },
]
