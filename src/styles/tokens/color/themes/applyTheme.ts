export function applyTheme(theme: Record<string, string>) {
  const root = document.documentElement

  for (const [key, value] of Object.entries(theme)) {
    root.style.setProperty(`--px-${key}`, value)
  }
}
