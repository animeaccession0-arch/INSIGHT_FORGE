import { useState, useCallback, useEffect } from 'react'
import { getItem, saveItem } from '../services/storageService'

const translations: Record<string, Record<string, string>> = {
  en: {
    'app.title': 'InsightForge',
    'app.tagline': 'Turn Raw Data Into Decisions',
    'upload.title': 'Upload Dataset',
    'dashboard.title': 'Dashboard',
    'insights.title': 'Key Insights',
    'heritage.title': 'Heritage QC',
  },
  hi: {
    'app.title': 'InsightForge',
    'app.tagline': 'कच्चे डेटा को निर्णयों में बदलें',
    'upload.title': 'डेटासेट अपलोड करें',
    'dashboard.title': 'डैशबोर्ड',
    'insights.title': 'मुख्य अंतर्दृष्टि',
    'heritage.title': 'हेरिटेज QC',
  }
}

export function useTranslation() {
  const [lang, setLang] = useState(() => getItem('lang', 'en'))

  useEffect(() => {
    saveItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((key: string) => {
    return translations[lang]?.[key] || translations['en']?.[key] || key
  }, [lang])

  const changeLanguage = useCallback((newLang: string) => {
    if (translations[newLang]) {
      setLang(newLang)
    }
  }, [])

  return {
    lang,
    t,
    changeLanguage,
    availableLanguages: Object.keys(translations)
  }
}
