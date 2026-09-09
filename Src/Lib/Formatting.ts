export function formatNumber(value: number, decimals = 2): string {
  if (isNaN(value)) return '—'
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  })
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleString()
}

export function truncateText(text: string, maxLength = 50): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
