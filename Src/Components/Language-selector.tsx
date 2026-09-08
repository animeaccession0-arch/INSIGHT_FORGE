import React from 'react'

interface LanguageSelectorProps {
  currentLang: string
  onLanguageChange: (lang: string) => void
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ja', name: '日本語' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'zh', name: '中文' },
  { code: 'ko', name: '한국어' },
  { code: 'ar', name: 'العربية' },
  { code: 'tr', name: 'Türkçe' },
]

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onLanguageChange
}) => {
  return (
    <div className="language-selector">
      <select
        value={currentLang}
        onChange={(e) => onLanguageChange(e.target.value)}
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector
