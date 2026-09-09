import { useMemo } from 'react'
import { DataRow, Insight } from '../types/data'
import { generateInsights, getDatasetOverview } from '../services/analysisService'
import { getNumericColumns } from '../lib/statistics'

export function useAnalysis(data: DataRow[], headers: string[]) {
  const basicStats = useMemo(() => {
    if (!data.length) return null
    return getDatasetOverview(data, headers)
  }, [data, headers])

  const insights: Insight[] = useMemo(() => {
    if (!data.length) return []
    return generateInsights(data, headers)
  }, [data, headers])

  const numericColumns = useMemo(() => {
    return getNumericColumns(data, headers)
  }, [data, headers])

  return {
    basicStats,
    insights,
    numericColumns,
    hasInsights: insights.length > 0
  }
}
