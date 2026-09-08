/**
 * InsightForge - Heritage QC Module
 * Data Quality Control & Validation
 */

const HeritageQC = (() => {

  function analyzeQuality() {
    const { data, headers } = DataModule.getData();
    if (!data || data.length === 0) {
      return {
        score: 0,
        issues: ["No data available for quality check."],
        details: {}
      };
    }

    const totalCells = data.length * headers.length;
    let missingCount = 0;
    let duplicateCount = 0;
    const columnMissing = {};
    const issues = [];
    const details = {};

    // 1. Missing Values Check
    headers.forEach(header => {
      columnMissing[header] = 0;
    });

    data.forEach(row => {
      headers.forEach(header => {
        const value = row[header];
        if (value === null || value === undefined || value === "") {
          missingCount++;
          columnMissing[header]++;
        }
      });
    });

    // 2. Duplicate Rows Check
    const seen = new Set();
    data.forEach(row => {
      const key = JSON.stringify(row);
      if (seen.has(key)) {
        duplicateCount++;
      } else {
        seen.add(key);
      }
    });

    // 3. Calculate Completeness
    const completeness = totalCells > 0 
      ? ((totalCells - missingCount) / totalCells) * 100 
      : 0;

    // 4. Quality Score Calculation
    let score = 100;

    // Penalty for missing values
    const missingPercentage = (missingCount / totalCells) * 100;
    score -= missingPercentage * 0.7;

    // Penalty for duplicates
    if (data.length > 0) {
      const duplicatePercentage = (duplicateCount / data.length) * 100;
      score -= duplicatePercentage * 0.5;
    }

    score = Math.max(0, Math.min(100, Math.round(score)));

    // 5. Generate Issues & Recommendations
    if (missingCount > 0) {
      issues.push(`Found \( {missingCount} missing values ( \){missingPercentage.toFixed(1)}% of data).`);
    } else {
      issues.push("No missing values detected. Good completeness.");
    }

    if (duplicateCount > 0) {
      issues.push(`Found ${duplicateCount} duplicate rows.`);
    } else {
      issues.push("No duplicate rows found.");
    }

    // Columns with high missing values
    Object.entries(columnMissing).forEach(([col, count]) => {
      if (count > 0) {
        const percent = ((count / data.length) * 100).toFixed(1);
        if (percent > 20) {
          issues.push(`Column "${col}" has ${percent}% missing values. Consider cleaning it.`);
        }
      }
    });

    if (score >= 85) {
      issues.push("Overall data quality is excellent.");
    } else if (score >= 70) {
      issues.push("Data quality is acceptable but can be improved.");
    } else {
      issues.push("Data quality needs attention. Cleaning is recommended.");
    }

    details.totalRows = data.length;
    details.totalColumns = headers.length;
    details.missingValues = missingCount;
    details.duplicateRows = duplicateCount;
    details.completeness = completeness.toFixed(1) + "%";
    details.columnMissing = columnMissing;

    return {
      score,
      issues,
      details
    };
  }

  function getQualityLabel(score) {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Good";
    if (score >= 60) return "Fair";
    if (score >= 40) return "Poor";
    return "Very Poor";
  }

  return {
    analyzeQuality,
    getQualityLabel
  };
})();
