import React, { useMemo } from 'react'
import { DataRow } from '../../types/data'
import { getNumericColumns, getColumnStats } from '../../lib/statistics'

interface PredictivePanelProps {
  data: DataRow[]
  headers: string[]
}

const PredictivePanel: React.FC<PredictivePanelProps> = ({ data, headers }) => {
  const result = useMemo(() => {
    if (!data.length) return null

    const numericCols = getNumericColumns(data, headers)
    if (numericCols.length === 0) {
      return { message: 'No numeric columns available for demand analysis.' }
    }

    const targetCol = numericCols[0]
    const stats = getColumnStats(data, targetCol)
    if (!stats) return { message: 'Not enough data for analysis.' }

    const values = data
      .map(row => row[targetCol])
      .filter(v => typeof v === 'number') as number[]

    const recent = values.slice(-Math.min(5, values.length))
    const recentMean = recent.reduce((a, b) => a + b, 0) / recent.length
    const change = ((recentMean - stats.mean) / stats.mean) * 100

    let trend = 'Demand appears relatively stable.'
    if (change > 15) trend = `Recent values are significantly higher (+${change.toFixed(1)}%). Possible increasing demand.`
    else if (change < -15) trend = `Recent values are significantly lower (${change.toFixed(1)}%). Possible decreasing demand.`

    let volatility = ''
    if (stats.std > stats.mean * 0.6) {
      volatility = `High volatility detected in "${targetCol}". Demand may be unpredictable.`
    }

    return {
      targetCol,
      mean: stats.mean,
      trend,
      volatility
    }
  }, [data, headers])

  if (!data.length) {
    return <p className="subtitle">Upload data to use Predictive analysis.</p>
  }

  if (!result || 'message' in result) {
    return <p className="subtitle">{result?.message}</p>
  }

  return (
    <div className="predictive-panel">
      <h2 className="page-title">🔮 Predictive Analysis</h2>
      <p className="subtitle">Simple demand & trend analysis</p>

      <div className="card">
        <p><strong>Target Column:</strong> {result.targetCol}</p>
        <p><strong>Average Value:</strong> {result.mean.toFixed(2)}</p>
        <p style={{ marginTop: '10px' }}>{result.trend}</p>
        {result.volatility && <p style={{ marginTop: '8px', color: '#fbbf24' }}>{result.volatility}</p>}
      </div>
    </div>
  )
}

export default PredictivePanel
