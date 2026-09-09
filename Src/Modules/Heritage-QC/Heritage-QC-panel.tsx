import React, { useMemo } from 'react'
import { DataRow } from '../../types/data'
import { analyzeDataQuality } from '../../services/heritageService'

interface HeritageQCPanelProps {
  data: DataRow[]
  headers: string[]
}

const HeritageQCPanel: React.FC<HeritageQCPanelProps> = ({ data, headers }) => {
  const result = useMemo(() => {
    return analyzeDataQuality(data, headers)
  }, [data, headers])

  const scoreColor =
    result.score >= 85 ? '#4ade80' :
    result.score >= 70 ? '#38bdf8' :
    result.score >= 50 ? '#fbbf24' : '#f87171'

  return (
    <div className="heritage-qc">
      <h2 className="page-title">🛡️ Heritage QC – Data Quality Report</h2>

      <div className="qc-score-box">
        <div className="qc-score" style={{ color: scoreColor }}>
          {result.score}
        </div>
        <div className="qc-label">{result.label}</div>
      </div>

      <div className="qc-details">
        <div className="qc-detail-item">
          <div className="label">Total Rows</div>
          <div className="value">{result.details.totalRows}</div>
        </div>
        <div className="qc-detail-item">
          <div className="label">Total Columns</div>
          <div className="value">{result.details.totalColumns}</div>
        </div>
        <div className="qc-detail-item">
          <div className="label">Missing Values</div>
          <div className="value">{result.details.missingValues}</div>
        </div>
        <div className="qc-detail-item">
          <div className="label">Duplicate Rows</div>
          <div className="value">{result.details.duplicateRows}</div>
        </div>
        <div className="qc-detail-item">
          <div className="label">Completeness</div>
          <div className="value">{result.details.completeness}</div>
        </div>
      </div>

      <h3 style={{ marginTop: '24px', marginBottom: '12px' }}>Issues & Recommendations</h3>
      <div className="qc-issues">
        {result.issues.map((issue, index) => (
          <div key={index} className="qc-issue">
            {issue}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeritageQCPanel
