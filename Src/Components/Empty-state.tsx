import React from 'react'

interface EmptyStateProps {
  icon?: string
  title?: string
  message?: string
  actionLabel?: string
  onAction?: () => void
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon = '📭',
  title = 'Nothing here yet',
  message = 'Upload a dataset to get started.',
  actionLabel,
  onAction
}) => {
  return (
    <div className="empty-state">
      <div className="empty-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{message}</p>
      {actionLabel && onAction && (
        <button className="primary-btn" onClick={onAction}>
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default EmptyState
