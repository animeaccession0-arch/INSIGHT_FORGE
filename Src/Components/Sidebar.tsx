import React from 'react'

interface SidebarProps {
  isOpen: boolean
  activeModule: string
  onModuleChange: (module: string) => void
}

const menuItems = [
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
]

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeModule, onModuleChange }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${activeModule === item.id ? 'active' : ''}`}
            onClick={() => onModuleChange(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {isOpen && <span className="sidebar-label">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
