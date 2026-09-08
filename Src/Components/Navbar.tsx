import React from 'react'

interface NavbarProps {
  onMenuClick?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Toggle menu">
          ☰
        </button>
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">InsightForge</span>
        </div>
      </div>

      <div className="navbar-right">
        <span className="tagline">Turn Raw Data Into Decisions</span>
      </div>
    </header>
  )
}

export default Navbar
