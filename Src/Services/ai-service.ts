import { DataRow, Insight } from '../types/data'
import { getColumnStats, getNumericColumns } from '../lib/statistics'

/**
 * Simple rule-based "AI" insights
 * (No external API – works fully offline)
 */
export function generateAIInsights(data: DataRow[], headers: string[]): Insight[] {
  const insights: Insight[] = []
  const numericCols = getNumericColumns(data, headers)

  if (numericCols.length === 0) {
    insights.push({
      type: 'Heuristic',
      text: 'No numeric columns found. Limited AI analysis possible.'
    })
    return insights
  }

  numericCols.slice(0, 4).forEach(col => {
    const stats = getColumnStats(data, col)
    if (!stats) return

    // Trend-like heuristic
    if (stats.std > stats.mean * 0.7) {
      insights.push({
        type: 'Prediction',
        text: `"${col}" is highly volatile. Future values may be unpredictable.`
      })
    } else if (stats.std < stats.mean * 0.15) {
      insights.push({
        type: 'Prediction',
        text: `"${col}" is very stable. Values are likely to stay consistent.`
      })
    }

    // Outlier hint
    const range = stats.max - stats.min
    if (range > stats.mean * 3) {
      insights.push({
        type: 'Heuristic',
        text: `"${col}" has a wide range. Possible outliers exist.`
      })
    }
  })

  if (insights.length === 0) {
    insights.push({
      type: 'Calculated',
      text: 'Data looks balanced. No strong anomalies detected by AI rules.'
    })
  }

  return insights
}
