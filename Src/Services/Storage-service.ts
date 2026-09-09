const PREFIX = 'insightforge_'

export function saveItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch (error) {
    console.error('Failed to save to localStorage', error)
  }
}

export function getItem<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(PREFIX + key)
    return item ? JSON.parse(item) : defaultValue
  } catch {
    return defaultValue
  }
}

export function removeItem(key: string): void {
  localStorage.removeItem(PREFIX + key)
}

export function clearAll(): void {
  Object.keys(localStorage)
    .filter(key => key.startsWith(PREFIX))
    .forEach(key => localStorage.removeItem(key))
}
