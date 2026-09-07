/**
 * InsightForge - Data Module
 * Handles file reading, parsing and basic statistics
 */

const DataModule = (() => {
  let rawData = [];
  let headers = [];

  function parseCSV(file) {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: (results) => {
          if (results.errors.length > 0) {
            reject(results.errors[0].message);
            return;
          }
          rawData = results.data;
          headers = results.meta.fields || [];
          resolve({ data: rawData, headers });
        },
        error: (err) => reject(err.message)
      });
    });
  }

  function getNumericColumns() {
    if (rawData.length === 0) return [];
    return headers.filter(header => {
      return rawData.some(row => typeof row[header] === 'number' && !isNaN(row[header]));
    });
  }

  function getBasicStats() {
    const numericCols = getNumericColumns();
    const stats = {
      rows: rawData.length,
      columns: headers.length,
      numericColumns: numericCols.length,
      missingValues: 0
    };

    // Count missing values
    rawData.forEach(row => {
      headers.forEach(h => {
        if (row[h] === null || row[h] === undefined || row[h] === '') {
          stats.missingValues++;
        }
      });
    });

    return stats;
  }

  function getColumnStats(column) {
    const values = rawData
      .map(row => row[column])
      .filter(v => typeof v === 'number' && !isNaN(v));

    if (values.length === 0) return null;

    const sum = values.reduce((a, b) => a + b, 0);
    const mean = sum / values.length;
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;

    const min = sorted[0];
    const max = sorted[sorted.length - 1];

    // Standard deviation
    const variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / values.length;
    const std = Math.sqrt(variance);

    return { mean, median, min, max, std, count: values.length };
  }

  function getData() {
    return { data: rawData, headers };
  }

  return {
    parseCSV,
    getNumericColumns,
    getBasicStats,
    getColumnStats,
    getData
  };
})();
