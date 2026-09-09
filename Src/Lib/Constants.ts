export const APP_NAME = 'InsightForge'
export const APP_TAGLINE = 'Turn Raw Data Into Decisions'

export const CHART_COLORS = [
  '#38bdf8',
  '#818cf8',
  '#34d399',
  '#fbbf24',
  '#f87171',
  '#a78bfa',
  '#2dd4bf'
]

export const MAX_PREVIEW_ROWS = 10
export const MAX_HISTORY_ITEMS = 10

export const MODULES = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'upload', label: 'Upload Data', icon: '📁' },
  { id: 'analysis', label: 'Data Analysis', icon: '📈' },
  { id: 'charts', label: 'Charts', icon: '📉' },
  { id: 'insights', label: 'Insights', icon: '💡' },
  { id: 'heritage-qc', label: 'Heritage QC', icon: '🛡️' },
  { id: 'product', label: 'Product Inspection', icon: '📦' },
  { id: 'predictive', label: 'Predictive', icon: '🔮' },
  { id: 'academic', label: 'Academic', icon: '🎓' },
  { id: 'language-lab', label: 'Language Lab', icon: '🌍' },
  { id: 'reviews', label: 'Reviews', icon: '⭐' },
  { id: 'admin', label: 'Admin', icon: '🔐' },
] as const
