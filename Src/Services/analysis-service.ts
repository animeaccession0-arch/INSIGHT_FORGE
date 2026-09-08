import { DataRow, Insight, BasicStats } from '../types/data'
import { getBasicStats, getColumnStats, getNumericColumns } from '../lib/statistics'
import { countDuplicateRows, getCompleteness } from '../lib/validation'

export function generateInsights(data: DataRow[], headers: string[]): Insight[] {
  const insights: Insight[] = []
  const stats = getBasicStats(data, headers)
  const numericCols = getNumericColumns(data, headers)

  insights.push({
    type: 'Calculated',
    text: `Dataset contains ${stats.rows} rows and ${stats.columns} columns.`
  })

  if (stats.missingValues > 0) {
    insights.push({
      type: 'Calculated',
      text: `Found ${stats.missingValues} missing values across the dataset.`
    })
  } else {
    insights.push({
      type: 'Calculated',
      text: 'No missing values detected. Data quality looks good.'
    })
  }

  numericCols.slice(0, 3).forEach(col => {
    const colStats = getColumnStats(data, col)
    if (colStats) {
      insights.push({
        type: 'Calculated',
        text: `${col}: Mean = ${colStats.mean.toFixed(2)}, Median = ${colStats.median.toFixed(2)}, Min = ${colStats.min}, Max = ${colStats.max}`
      })

      if (colStats.std > colStats.mean * 0.5) {
        insights.push({
          type: 'Heuristic',
          text: `${col} shows high variability (Std Dev = ${colStats.std.toFixed(2)}).`
        })
      }
    }
  })

  const duplicates = countDuplicateRows(data)
  if (duplicates > 0) {
    insights.push({
      type: 'Heuristic',
      text: `Found ${duplicates} duplicate rows. Consider cleaning the data.`
    })
  }

  return insights
}

export function getDatasetOverview(data: DataRow[], headers: string[]): BasicStats {
  return getBasicStats(data, headers)
}
