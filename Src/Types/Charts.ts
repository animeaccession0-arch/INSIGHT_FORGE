export type ChartType = 'bar' | 'line' | 'pie' | 'doughnut'

export interface ChartConfig {
  column: string
  type: ChartType
}

export interface ChartDataPoint {
  name: string
  value: number
}
