export interface HeritageQCResult {
  score: number
  label: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Very Poor'
  issues: string[]
  details: {
    totalRows: number
    totalColumns: number
    missingValues: number
    duplicateRows: number
    completeness: string
  }
}
