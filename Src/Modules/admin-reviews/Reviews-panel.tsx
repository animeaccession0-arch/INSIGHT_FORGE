import React, { useState } from 'react'
import { getItem, saveItem } from '../../services/storageService'

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
}

const ReviewsPanel: React.FC = () => {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (rating === 0) {
      setMessage('Please select a rating.')
      return
    }

    const reviews: Review[] = getItem('reviews', [])
    const newReview: Review = {
      id: Date.now(),
      name: name.trim() || 'Anonymous',
      rating,
      comment: comment.trim(),
      date: new Date().toLocaleString()
    }

    reviews.unshift(newReview)
    saveItem('reviews', reviews)

    setMessage('Thank you for your review!')
    setName('')
    setRating(0)
    setComment('')
  }

  return (
    <div className="reviews-panel">
      <h2 className="page-title">⭐ Leave a Review</h2>
      <p className="subtitle">How is your experience with InsightForge?</p>

      <div className="review-form">
        <input
          type="text"
          placeholder="Your Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={`star ${rating >= value ? 'active' : ''}`}
              onClick={() => setRating(value)}
            >
              ★
            </span>
          ))}
        </div>

        <textarea
          placeholder="Write your review here..."
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button className="primary-btn" onClick={handleSubmit}>
          Submit Review
        </button>

        {message && <p className="review-message">{message}</p>}
      </div>
    </div>
  )
}

export default ReviewsPanel
