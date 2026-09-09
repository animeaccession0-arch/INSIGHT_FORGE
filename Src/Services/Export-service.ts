import { DataRow, Insight } from '../types/data'
import { downloadFile } from '../lib/utils'

export function exportToCSV(data: DataRow[], headers: string[], fileName = 'insightforge_export') {
  if (!data.length) return

  const csvContent = [
    headers.join(','),
    ...data.map(row =>
      headers
        .map(h => {
          const value = row[h] ?? ''
          return `"${String(value).replace(/"/g, '""')}"`
        })
        .join(',')
    )
  ].join('\n')

  downloadFile(csvContent, `${fileName}.csv`, 'text/csv;charset=utf-8;')
}

export function exportReport(
  data: DataRow[],
  headers: string[],
  insights: Insight[] = []
) {
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

  downloadFile(report, `InsightForge_Report_${Date.now()}.txt`, 'text/plain;charset=utf-8;')
}
