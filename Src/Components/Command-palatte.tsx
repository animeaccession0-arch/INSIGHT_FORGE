import React, { useState, useEffect } from 'react'

interface Command {
  id: string
  label: string
  icon?: string
  action: () => void
}

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
  commands: Command[]
}

const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  commands
}) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="command-palette-overlay" onClick={onClose}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          placeholder="Type a command..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
          className="command-input"
        />

        <div className="command-list">
          {filtered.length === 0 && (
            <div className="command-empty">No commands found</div>
          )}
          {filtered.map((cmd) => (
            <button
              key={cmd.id}
              className="command-item"
              onClick={() => {
                cmd.action()
                onClose()
              }}
            >
              {cmd.icon && <span className="command-icon">{cmd.icon}</span>}
              <span>{cmd.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
