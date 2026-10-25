/** Public asset URL that respects Vite `base` (GitHub Pages project path). */
export function asset(path: string): string {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}
