import { DataRow } from '../types/data'
import { ChartType, ChartDataPoint } from '../types/charts'
import { getNumericColumns } from '../lib/statistics'

export function getChartData(
  data: DataRow[],
  column: string
): ChartDataPoint[] {
  return data
    .map((row, index) => ({
      name: String(index + 1),
      value: typeof row[column] === 'number' ? (row[column] as number) : 0
    }))
    .filter(item => !isNaN(item.value))
}

export function getAvailableChartColumns(data: DataRow[], headers: string[]): string[] {
  return getNumericColumns(data, headers)
}

export function isValidChartType(type: string): type is ChartType {
  return ['bar', 'line', 'pie', 'doughnut'].includes(type)
}
