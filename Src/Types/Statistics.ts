import { DataRow, ColumnStats, BasicStats } from '../types/data'

export function getNumericColumns(data: DataRow[], headers: string[]): string[] {
  if (!data.length) return []

  return headers.filter(header =>
    data.some(row => typeof row[header] === 'number' && !isNaN(row[header] as number))
  )
}

export function getBasicStats(data: DataRow[], headers: string[]): BasicStats {
  let missingValues = 0

  data.forEach(row => {
    headers.forEach(header => {
      const value = row[header]
      if (value === null || value === undefined || value === '') {
        missingValues++
      }
    })
  })

  const numericColumns = getNumericColumns(data, headers).length

  return {
    rows: data.length,
    columns: headers.length,
    numericColumns,
    missingValues
  }
}

export function getColumnStats(data: DataRow[], column: string): ColumnStats | null {
  const values = data
    .map(row => row[column])
    .filter(v => typeof v === 'number' && !isNaN(v as number)) as number[]

  if (values.length === 0) return null

  const sorted = [...values].sort((a, b) => a - b)
  const sum = values.reduce((a, b) => a + b, 0)
  const mean = sum / values.length
  const mid = Math.floor(sorted.length / 2)

  const median =
    sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2

  const variance =
    values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length

  return {
    mean,
    median,
    min: sorted[0],
    max: sorted[sorted.length - 1],
    std: Math.sqrt(variance),
    count: values.length
  }
}
