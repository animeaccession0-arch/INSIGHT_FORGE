import { DataRow } from '../types/data'
import { HeritageQCResult } from '../types/heritage'
import { countMissingValues, countDuplicateRows, getCompleteness } from '../lib/validation'

export function analyzeDataQuality(data: DataRow[], headers: string[]): HeritageQCResult {
  if (!data.length || !headers.length) {
    return {
      score: 0,
      label: 'Very Poor',
      issues: ['No data available for quality check.'],
      details: {
        totalRows: 0,
        totalColumns: 0,
        missingValues: 0,
        duplicateRows: 0,
        completeness: '0%'
      }
    }
  }

  const totalCells = data.length * headers.length
  const missingValues = countMissingValues(data, headers)
  const duplicateRows = countDuplicateRows(data)
  const completeness = getCompleteness(data, headers)

  let score = 100
  const missingPercentage = (missingValues / totalCells) * 100
  score -= missingPercentage * 0.7

  const duplicatePercentage = (duplicateRows / data.length) * 100
  score -= duplicatePercentage * 0.5

  score = Math.max(0, Math.min(100, Math.round(score)))

  const issues: string[] = []

  if (missingValues > 0) {
    issues.push(`Found \( {missingValues} missing values ( \){missingPercentage.toFixed(1)}% of data).`)
  } else {
    issues.push('No missing values detected. Good completeness.')
  }

  if (duplicateRows > 0) {
    issues.push(`Found ${duplicateRows} duplicate rows.`)
  } else {
    issues.push('No duplicate rows found.')
  }

  if (score >= 85) {
    issues.push('Overall data quality is excellent.')
  } else if (score >= 70) {
    issues.push('Data quality is acceptable but can be improved.')
  } else {
    issues.push('Data quality needs attention. Cleaning is recommended.')
  }

  const label =
    score >= 90 ? 'Excellent' :
    score >= 75 ? 'Good' :
    score >= 60 ? 'Fair' :
    score >= 40 ? 'Poor' : 'Very Poor'

  return {
    score,
    label,
    issues,
    details: {
      totalRows: data.length,
      totalColumns: headers.length,
      missingValues,
      duplicateRows,
      completeness: completeness.toFixed(1) + '%'
    }
  }
}
