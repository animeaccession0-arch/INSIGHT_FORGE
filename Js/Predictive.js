/**
 * InsightForge - Predictive Module
 * Simple demand & risk analysis (heuristic based)
 */

const PredictiveModule = (() => {

  function analyzeDemand() {
    const { data, headers } = DataModule.getData();
    if (!data || data.length === 0) return [];

    const insights = [];
    const numericCols = DataModule.getNumericColumns();

    if (numericCols.length === 0) {
      insights.push({
        type: "Calculated",
        text: "No numeric columns available for demand analysis."
      });
      return insights;
    }

    // Use the first numeric column as a proxy for demand/sales
    const targetCol = numericCols[0];
    const values = data
      .map(row => row[targetCol])
      .filter(v => typeof v === "number" && !isNaN(v));

    if (values.length < 3) {
      insights.push({
        type: "Heuristic",
        text: "Not enough data points for meaningful demand analysis."
      });
      return insights;
    }

    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const recent = values.slice(-Math.min(5, values.length));
    const recentMean = recent.reduce((a, b) => a + b, 0) / recent.length;

    const change = ((recentMean - mean) / mean) * 100;

    insights.push({
      type: "Calculated",
      text: `Average value of "${targetCol}": ${mean.toFixed(2)}`
    });

    if (change > 15) {
      insights.push({
        type: "Heuristic",
        text: `Recent values are significantly higher (+${change.toFixed(1)}%). Possible increasing demand.`
      });
    } else if (change < -15) {
      insights.push({
        type: "Heuristic",
        text: `Recent values are significantly lower (${change.toFixed(1)}%). Possible decreasing demand.`
      });
    } else {
      insights.push({
        type: "Heuristic",
        text: `Demand for "${targetCol}" appears relatively stable.`
      });
    }

    // Simple volatility check
    const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;
    const std = Math.sqrt(variance);

    if (std > mean * 0.6) {
      insights.push({
        type: "Heuristic",
        text: `High volatility detected in "${targetCol}". Demand may be unpredictable.`
      });
    }

    return insights;
  }

  return {
    analyzeDemand
  };
})();
