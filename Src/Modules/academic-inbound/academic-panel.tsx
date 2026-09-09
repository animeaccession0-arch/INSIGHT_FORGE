import React, { useMemo } from 'react'
import { DataRow } from '../../types/data'
import { getColumnStats } from '../../lib/statistics'

interface AcademicPanelProps {
  data: DataRow[]
  headers: string[]
}

const AcademicPanel: React.FC<AcademicPanelProps> = ({ data, headers }) => {
  const analysis = useMemo(() => {
    if (!data.length) return null

    const lower = headers.map(h => h.toLowerCase())
    const scoreCol = headers.find((_, i) => /score|gpa|marks|grade|percentage/.test(lower[i]))
    const englishCol = headers.find((_, i) => /english|toefl|ielts|det|language/.test(lower[i]))

    const insights: string[] = []

    if (scoreCol) {
      const stats = getColumnStats(data, scoreCol)
      if (stats) {
        insights.push(`Academic Score (${scoreCol}) → Mean: ${stats.mean.toFixed(2)}, Median: ${stats.median.toFixed(2)}`)
        if (stats.mean >= 85) insights.push('Overall academic performance appears strong.')
        else if (stats.mean < 60) insights.push('Average academic scores are relatively low.')
      }
    }

    if (englishCol) {
      const stats = getColumnStats(data, englishCol)
      if (stats) {
        insights.push(`English proficiency scores average ${stats.mean.toFixed(2)}`)
      }
    }

    if (!scoreCol && !englishCol) {
      insights.push('No clear academic score or English proficiency columns detected.')
    }

    return { insights, scoreCol, englishCol }
  }, [data, headers])

  if (!data.length) {
    return <p className="subtitle">Upload data to use Academic analysis.</p>
  }

  return (
    <div className="academic-panel">
      <h2 className="page-title">🎓 Academic Inbound</h2>
      <p className="subtitle">Academic performance analysis</p>

      <div className="insights-list">
        {analysis?.insights.map((text, i) => (
          <div key={i} className="insight-item">
            <div className="insight-text">{text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicPanel
