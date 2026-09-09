import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { getItem, removeItem } from '../../services/storageService'

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
}

const AdminPanel: React.FC = () => {
  const { isAdmin, login, logout } = useAuth()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const reviews: Review[] = getItem('reviews', [])

  const handleLogin = () => {
    if (login(password)) {
      setError('')
      setPassword('')
    } else {
      setError('Wrong password!')
    }
  }

  const clearReviews = () => {
    if (confirm('Are you sure you want to delete all reviews?')) {
      removeItem('reviews')
      window.location.reload()
    }
  }

  if (!isAdmin) {
    return (
      <div className="admin-panel">
        <h2 className="page-title">🔐 Admin Panel</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary-btn" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error-text">{error}</p>}
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2 className="page-title">🔐 Admin Panel</h2>
        <button className="danger-btn" onClick={logout}>Logout</button>
      </div>

      <h3>All Reviews ({reviews.length})</h3>

      {reviews.length === 0 && <p>No reviews yet.</p>}

      {reviews.map((review) => (
        <div key={review.id} className="admin-review-card">
          <div className="review-header">
            <strong>{review.name}</strong>
            <span className="stars">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </span>
          </div>
          <p>{review.comment || <em>No comment</em>}</p>
          <small>{review.date}</small>
        </div>
      ))}

      {reviews.length > 0 && (
        <button className="danger-btn" onClick={clearReviews} style={{ marginTop: '16px' }}>
          Clear All Reviews
        </button>
      )}
    </div>
  )
}

export default AdminPanel
