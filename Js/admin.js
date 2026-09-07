/**
 * InsightForge - Admin Panel
 * Simple password protection
 */

const AdminPanel = (() => {
  // Change this password to whatever you want
  const ADMIN_PASSWORD = "admin123";

  function login(password) {
    return password === ADMIN_PASSWORD;
  }

  function renderReviews(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const reviews = ReviewSystem.getReviews();

    if (reviews.length === 0) {
      container.innerHTML = `<p class="no-reviews">No reviews yet.</p>`;
      return;
    }

    container.innerHTML = reviews.map(review => `
      <div class="admin-review-card">
        <div class="review-header">
          <strong>${review.name}</strong>
          <span class="stars">\( {"★".repeat(review.rating)} \){"☆".repeat(5 - review.rating)}</span>
        </div>
        <p class="review-comment">${review.comment || "<em>No comment</em>"}</p>
        <small class="review-date">${review.date}</small>
      </div>
    `).join("");
  }

  return {
    login,
    renderReviews
  };
})();
