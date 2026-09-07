/**
 * InsightForge - Review System
 * Stores reviews in localStorage
 */

const ReviewSystem = (() => {
  const STORAGE_KEY = "insightforge_reviews";

  function getReviews() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  function saveReview(name, rating, comment) {
    const reviews = getReviews();

    const newReview = {
      id: Date.now(),
      name: name.trim() || "Anonymous",
      rating: Number(rating),
      comment: comment.trim(),
      date: new Date().toLocaleString()
    };

    reviews.unshift(newReview); // latest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    return newReview;
  }

  function getAverageRating() {
    const reviews = getReviews();
    if (reviews.length === 0) return 0;

    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return (total / reviews.length).toFixed(1);
  }

  function clearAllReviews() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    getReviews,
    saveReview,
    getAverageRating,
    clearAllReviews
  };
})();
