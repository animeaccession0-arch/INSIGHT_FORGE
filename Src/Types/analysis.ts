export interface QualityResult {
  score: number
  label: string
  issues: string[]
  details: {
    totalRows: number
    totalColumns: number
    missingValues: number
    duplicateRows: number
    completeness: string
  }
}

export interface AnalysisResult {
  basicStats: {
    rows: number
    columns: number
    numericColumns: number
    missingValues: number
  }
  insights: {
    type: 'Calculated' | 'Heuristic' | 'Prediction'
    text: string
  }[]
  quality?: QualityResult
}
