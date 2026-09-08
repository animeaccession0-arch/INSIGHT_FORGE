import React from 'react'

interface ExportPanelProps {
  data: any[]
  headers: string[]
  fileName?: string
  insights?: { type: string; text: string }[]
}

const ExportPanel: React.FC<ExportPanelProps> = ({
  data,
  headers,
  fileName = 'insightforge_export',
  insights = []
}) => {
  const downloadCSV = () => {
    if (!data || data.length === 0) return

    const csvContent = [
      headers.join(','),
      ...data.map(row =>
        headers.map(h => {
          const value = row[h] ?? ''
          return `"${String(value).replace(/"/g, '""')}"`
        }).join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${fileName}.csv`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  const downloadReport = () => {
    let report = '========================================\n'
    report += '       INSIGHTFORGE DATA REPORT\n'
    report += '========================================\n\n'
    report += `Generated on: ${new Date().toLocaleString()}\n\n`

    report += 'DATASET OVERVIEW\n'
    report += '----------------\n'
    report += `Total Rows     : ${data.length}\n`
    report += `Total Columns  : ${headers.length}\n\n`

    report += 'COLUMNS\n'
    report += '-------\n'
    headers.forEach((h, i) => {
      report += `${i + 1}. ${h}\n`
    })
    report += '\n'

    if (insights.length > 0) {
      report += 'KEY INSIGHTS\n'
      report += '------------\n'
      insights.forEach((insight, i) => {
        report += `\( {i + 1}. [ \){insight.type}] ${insight.text}\n`
      })
    }

    report += '\n========================================\n'
    report += 'End of Report - InsightForge\n'
    report += '========================================\n'

    const blob = new Blob([report], { type: 'text/plain;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `InsightForge_Report_${Date.now()}.txt`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return (
    <div className="export-panel">
      <h2 className="page-title">Export</h2>
      <p className="subtitle">Download your data or generate a report</p>

      <div className="export-buttons">
        <button className="primary-btn" onClick={downloadCSV} disabled={data.length === 0}>
          Download CSV
        </button>
        <button className="secondary-btn" onClick={downloadReport} disabled={data.length === 0}>
          Download Text Report
        </button>
      </div>
    </div>
  )
}

export default ExportPanel
