export interface DataRow {
  [key: string]: string | number | null | undefined
}

export interface Dataset {
  data: DataRow[]
  headers: string[]
  fileName: string
}

export interface BasicStats {
  rows: number
  columns: number
  numericColumns: number
  missingValues: number
}

export interface ColumnStats {
  mean: number
  median: number
  min: number
  max: number
  std: number
  count: number
}

export interface Insight {
  type: 'Calculated' | 'Heuristic' | 'Prediction'
  text: string
}
