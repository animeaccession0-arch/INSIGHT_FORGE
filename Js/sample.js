/**
 * InsightForge - Sample CSV Generator
 * Creates downloadable sample datasets
 */

const SampleModule = (() => {

  function generateSalesSample() {
    const rows = [
      ["Product", "Units Sold", "Revenue", "Cost", "Returns", "Date"],
      ["Wireless Earbuds", 145, 7250, 3200, 12, "2025-01-12"],
      ["Smart Watch", 89, 17800, 9500, 5, "2025-01-15"],
      ["Laptop Stand", 210, 6300, 2100, 18, "2025-01-18"],
      ["USB-C Hub", 167, 5010, 1800, 9, "2025-01-20"],
      ["Mechanical Keyboard", 76, 11400, 5200, 3, "2025-01-22"],
      ["Monitor Light Bar", 132, 7920, 3100, 7, "2025-01-25"],
      ["Noise Cancelling Headphones", 54, 16200, 8900, 2, "2025-01-28"],
      ["Portable SSD 1TB", 98, 9800, 5100, 4, "2025-02-01"]
    ];
    return rows;
  }

  function generateAcademicSample() {
    const rows = [
      ["Name", "GPA", "English Score", "Research Experience", "Leadership", "Projects"],
      ["Aarav Sharma", 3.85, 112, "Yes", "Yes", 4],
      ["Priya Patel", 3.92, 118, "Yes", "No", 3],
      ["Rohan Mehta", 3.45, 105, "No", "Yes", 2],
      ["Sneha Reddy", 3.78, 121, "Yes", "Yes", 5],
      ["Vikram Singh", 3.60, 98, "No", "No", 1],
      ["Ananya Gupta", 3.95, 125, "Yes", "Yes", 6]
    ];
    return rows;
  }

  function downloadCSV(rows, filename) {
    const csvContent = rows.map(row => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  function downloadSalesSample() {
    downloadCSV(generateSalesSample(), "sample_sales_data.csv");
  }

  function downloadAcademicSample() {
    downloadCSV(generateAcademicSample(), "sample_academic_data.csv");
  }

  return {
    downloadSalesSample,
    downloadAcademicSample
  };
})();
