import React, { useState } from 'react'

const phrases: Record<string, { name: string; greetings: string[]; data: string[] }> = {
  en: {
    name: 'English',
    greetings: ['Hello', 'How are you?', 'Thank you', 'Goodbye'],
    data: ['Upload Dataset', 'Key Insights', 'Missing Values', 'Generate Chart']
  },
  hi: {
    name: 'Hindi',
    greetings: ['नमस्ते', 'आप कैसे हैं?', 'धन्यवाद', 'अलविदा'],
    data: ['डेटासेट अपलोड करें', 'मुख्य अंतर्दृष्टि', 'लापता मान', 'चार्ट बनाएं']
  },
  ja: {
    name: 'Japanese',
    greetings: ['こんにちは', 'お元気ですか？', 'ありがとう', 'さようなら'],
    data: ['データセットをアップロード', '主要なインサイト', '欠損値', 'チャートを生成']
  },
  es: {
    name: 'Spanish',
    greetings: ['Hola', '¿Cómo estás?', 'Gracias', 'Adiós'],
    data: ['Subir conjunto de datos', 'Ideas clave', 'Valores faltantes', 'Generar gráfico']
  }
}

const LanguageLabPanel: React.FC = () => {
  const [selected, setSelected] = useState('en')
  const current = phrases[selected]

  return (
    <div className="language-lab">
      <h2 className="page-title">🌍 Language Lab</h2>
      <p className="subtitle">Learn basic phrases used in InsightForge</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {Object.entries(phrases).map(([code, lang]) => (
          <button
            key={code}
            className={`secondary-btn ${selected === code ? 'primary-btn' : ''}`}
            onClick={() => setSelected(code)}
          >
            {lang.name}
          </button>
        ))}
      </div>

      {current && (
        <div className="card">
          <h3>{current.name}</h3>

          <h4 style={{ marginTop: '16px', marginBottom: '8px' }}>Common Greetings</h4>
          <ul>
            {current.greetings.map((p, i) => (
              <li key={i} style={{ marginBottom: '4px' }}>{p}</li>
            ))}
          </ul>

          <h4 style={{ marginTop: '16px', marginBottom: '8px' }}>Data Related Words</h4>
          <ul>
            {current.data.map((p, i) => (
              <li key={i} style={{ marginBottom: '4px' }}>{p}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageLabPanel
