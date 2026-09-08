import React from 'react'

interface ChartControlsProps {
  columns: string[]
  selectedColumn: string
  chartType: 'bar' | 'line' | 'pie' | 'doughnut'
  onColumnChange: (column: string) => void
  onChartTypeChange: (type: 'bar' | 'line' | 'pie' | 'doughnut') => void
}

const ChartControls: React.FC<ChartControlsProps> = ({
  columns,
  selectedColumn,
  chartType,
  onColumnChange,
  onChartTypeChange
}) => {
  return (
    <div className="chart-controls">
      <div className="control-group">
        <label htmlFor="column-select">Column</label>
        <select
          id="column-select"
          value={selectedColumn}
          onChange={(e) => onColumnChange(e.target.value)}
        >
          {columns.length === 0 && <option value="">No numeric columns</option>}
          {columns.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="chart-type">Chart Type</label>
        <select
          id="chart-type"
          value={chartType}
          onChange={(e) =>
            onChartTypeChange(e.target.value as 'bar' | 'line' | 'pie' | 'doughnut')
          }
        >
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="pie">Pie Chart</option>
          <option value="doughnut">Doughnut Chart</option>
        </select>
      </div>
    </div>
  )
}

export default ChartControls
