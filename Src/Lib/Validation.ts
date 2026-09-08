import { DataRow } from '../types/data'

export function countMissingValues(data: DataRow[], headers: string[]): number {
  let count = 0
  data.forEach(row => {
    headers.forEach(header => {
      const value = row[header]
      if (value === null || value === undefined || value === '') {
        count++
      }
    })
  })
  return count
}

export function countDuplicateRows(data: DataRow[]): number {
  const seen = new Set<string>()
  let duplicates = 0

  data.forEach(row => {
    const key = JSON.stringify(row)
    if (seen.has(key)) {
      duplicates++
    } else {
      seen.add(key)
    }
  })

  return duplicates
}

export function getCompleteness(data: DataRow[], headers: string[]): number {
  if (data.length === 0 || headers.length === 0) return 0

  const totalCells = data.length * headers.length
  const missing = countMissingValues(data, headers)
  return ((totalCells - missing) / totalCells) * 100
}
