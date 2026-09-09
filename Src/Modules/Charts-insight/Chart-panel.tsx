import React, { useState, useEffect } from 'react'
import { DataRow } from '../../types/data'
import { ChartType } from '../../types/charts'
import ChartControls from '../../components/ChartControls'
import ChartRenderer from '../../components/ChartRenderer'
import { getNumericColumns } from '../../lib/statistics'

interface ChartsPanelProps {
  data: DataRow[]
  headers: string[]
}

const ChartsPanel: React.FC<ChartsPanelProps> = ({ data, headers }) => {
  const numericColumns = getNumericColumns(data, headers)
  const [selectedColumn, setSelectedColumn] = useState('')
  const [chartType, setChartType] = useState<ChartType>('bar')

  useEffect(() => {
    if (numericColumns.length > 0 && !selectedColumn) {
      setSelectedColumn(numericColumns[0])
    }
  }, [numericColumns, selectedColumn])

  if (!data.length) {
    return <p className="subtitle">Upload data to generate charts.</p>
  }

  return (
    <div className="charts-panel">
      <h2 className="page-title">📉 Charts</h2>

      <ChartControls
        columns={numericColumns}
        selectedColumn={selectedColumn}
        chartType={chartType}
        onColumnChange={setSelectedColumn}
        onChartTypeChange={setChartType}
      />

      <ChartRenderer
        data={data}
        column={selectedColumn}
        chartType={chartType}
      />
    </div>
  )
}

export default ChartsPanel
