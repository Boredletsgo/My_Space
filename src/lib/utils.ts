export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

/** Resolves a public/ asset against the configured Vite base URL. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
