/**
 * InsightForge - History Module
 * Saves recent analysis history in browser
 */

const HistoryModule = (() => {
  const STORAGE_KEY = "insightforge_history";
  const MAX_ITEMS = 10;

  function getHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveToHistory(fileName, stats) {
    const history = getHistory();

    const entry = {
      id: Date.now(),
      fileName: fileName || "Unknown",
      rows: stats.rows,
      columns: stats.columns,
      missing: stats.missingValues,
      timestamp: new Date().toISOString()
    };

    history.unshift(entry);

    // Keep only latest items
    if (history.length > MAX_ITEMS) {
      history.length = MAX_ITEMS;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }

  function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    getHistory,
    saveToHistory,
    clearHistory
  };
})();
