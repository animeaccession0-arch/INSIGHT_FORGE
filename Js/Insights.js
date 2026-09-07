/**
 * InsightForge - Insights Module
 * Generates transparent, rule-based insights
 */

const InsightsModule = (() => {

  function generateInsights() {
    const { data, headers } = DataModule.getData();
    const stats = DataModule.getBasicStats();
    const numericCols = DataModule.getNumericColumns();
    const insights = [];

    // Basic dataset insight
    insights.push({
      type: 'Calculated',
      text: `Dataset contains ${stats.rows} rows and ${stats.columns} columns.`
    });

    if (stats.missingValues > 0) {
      insights.push({
        type: 'Calculated',
        text: `Found ${stats.missingValues} missing values across the dataset.`
      });
    } else {
      insights.push({
        type: 'Calculated',
        text: `No missing values detected. Data quality looks good.`
      });
    }

    // Numeric column insights
    numericCols.slice(0, 3).forEach(col => {
      const colStats = DataModule.getColumnStats(col);
      if (colStats) {
        insights.push({
          type: 'Calculated',
          text: `${col}: Mean = ${colStats.mean.toFixed(2)}, Median = ${colStats.median.toFixed(2)}, Min = ${colStats.min}, Max = ${colStats.max}`
        });

        if (colStats.std > colStats.mean * 0.5) {
          insights.push({
            type: 'Heuristic',
            text: `${col} shows high variability (Std Dev = ${colStats.std.toFixed(2)}).`
          });
        }
      }
    });

    if (numericCols.length === 0) {
      insights.push({
        type: 'Calculated',
        text: 'No numeric columns found for statistical analysis.'
      });
    }

    return insights;
  }

  return {
    generateInsights
  };
})();
