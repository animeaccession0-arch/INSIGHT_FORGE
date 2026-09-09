import React from 'react'
import { DataRow } from '../../types/data'
import DataTable from '../../components/DataTable'
import { useAnalysis } from '../../hooks/useAnalysis'

interface AnalysisPanelProps {
  data: DataRow[]
  headers: string[]
}

const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ data, headers }) => {
  const { basicStats, numericColumns } = useAnalysis(data, headers)

  if (!data.length) {
    return <p className="subtitle">Upload a dataset to see analysis.</p>
  }

  return (
    <div className="analysis-panel">
      <h2 className="page-title">📈 Data Analysis</h2>

      {basicStats && (
        <div className="dashboard-grid" style={{ marginBottom: '24px' }}>
          <div className="stat-card">
            <div className="stat-label">Rows</div>
            <div className="stat-value">{basicStats.rows}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Columns</div>
            <div className="stat-value">{basicStats.columns}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Numeric Columns</div>
            <div className="stat-value">{basicStats.numericColumns}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Missing Values</div>
            <div className="stat-value">{basicStats.missingValues}</div>
          </div>
        </div>
      )}

      <h3 style={{ marginBottom: '12px' }}>Data Preview</h3>
      <DataTable data={data} headers={headers} maxRows={12} />

      {numericColumns.length > 0 && (
        <p className="subtitle" style={{ marginTop: '16px' }}>
          Numeric columns detected: {numericColumns.join(', ')}
        </p>
      )}
    </div>
  )
}

export default AnalysisPanel
