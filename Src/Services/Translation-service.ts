const translations: Record<string, Record<string, string>> = {
  en: {
    'app.title': 'InsightForge',
    'app.tagline': 'Turn Raw Data Into Decisions',
    'nav.dashboard': 'Dashboard',
    'nav.upload': 'Upload Data',
    'nav.analysis': 'Data Analysis',
    'nav.charts': 'Charts',
    'nav.insights': 'Insights',
    'nav.heritage': 'Heritage QC',
    'nav.reviews': 'Reviews',
    'nav.admin': 'Admin',
    'upload.title': 'Upload Dataset',
    'upload.subtitle': 'Upload a CSV file to begin analysis',
    'insights.title': 'Key Insights',
    'heritage.title': 'Heritage QC – Data Quality Report',
    'export.csv': 'Download CSV',
    'export.report': 'Download Text Report',
  },
  hi: {
    'app.title': 'InsightForge',
    'app.tagline': 'कच्चे डेटा को निर्णयों में बदलें',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.upload': 'डेटा अपलोड',
    'nav.analysis': 'डेटा विश्लेषण',
    'nav.charts': 'चार्ट',
    'nav.insights': 'अंतर्दृष्टि',
    'nav.heritage': 'हेरिटेज QC',
    'nav.reviews': 'समीक्षा',
    'nav.admin': 'एडमिन',
    'upload.title': 'डेटासेट अपलोड करें',
    'upload.subtitle': 'विश्लेषण शुरू करने के लिए CSV फ़ाइल अपलोड करें',
    'insights.title': 'मुख्य अंतर्दृष्टि',
    'heritage.title': 'हेरिटेज QC – डेटा गुणवत्ता रिपोर्ट',
    'export.csv': 'CSV डाउनलोड करें',
    'export.report': 'टेक्स्ट रिपोर्ट डाउनलोड करें',
  }
}

export function translate(key: string, lang = 'en'): string {
  return translations[lang]?.[key] || translations['en']?.[key] || key
}

export function getAvailableLanguages(): string[] {
  return Object.keys(translations)
}
