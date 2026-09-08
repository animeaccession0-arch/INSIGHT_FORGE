import React from 'react'

interface ErrorStateProps {
  title?: string
  message?: string
  onRetry?: () => void
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  onRetry
}) => {
  return (
    <div className="error-state">
      <div className="error-icon">⚠️</div>
      <h3>{title}</h3>
      <p>{message}</p>
      {onRetry && (
        <button className="primary-btn" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorState
