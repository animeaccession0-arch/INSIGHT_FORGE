import React from 'react'

interface DashboardProps {
  hasData: boolean
  onUploadClick: () => void
}

const Dashboard: React.FC<DashboardProps> = ({ hasData, onUploadClick }) => {
  return (
    <div className="dashboard">
      <h2 className="page-title">Dashboard</h2>

      {!hasData ? (
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <h3>No data loaded yet</h3>
          <p>Upload a CSV file to start analyzing your data with InsightForge.</p>
          <button className="primary-btn" onClick={onUploadClick}>
            Upload Dataset
          </button>
        </div>
      ) : (
        <div className="dashboard-grid">
          <div className="stat-card">
            <div className="stat-label">Total Rows</div>
            <div className="stat-value">—</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Columns</div>
            <div className="stat-value">—</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Missing Values</div>
            <div className="stat-value">—</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Quality Score</div>
            <div className="stat-value">—</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
