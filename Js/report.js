/**
 * InsightForge - Report Generator
 * Creates a simple downloadable text report
 */

const ReportModule = (() => {

  function generateReport() {
    const { data, headers } = DataModule.getData();
    const stats = DataModule.getBasicStats();
    const insights = InsightsModule.generateInsights();

    let report = "========================================\n";
    report += "       INSIGHTFORGE DATA REPORT\n";
    report += "========================================\n\n";

    report += `Generated on: ${new Date().toLocaleString()}\n\n`;

    report += "DATASET OVERVIEW\n";
    report += "----------------\n";
    report += `Total Rows     : ${stats.rows}\n`;
    report += `Total Columns  : ${stats.columns}\n`;
    report += `Numeric Columns: ${stats.numericColumns}\n`;
    report += `Missing Values : ${stats.missingValues}\n\n`;

    report += "COLUMNS\n";
    report += "-------\n";
    headers.forEach((h, i) => {
      report += `${i + 1}. ${h}\n`;
    });
    report += "\n";

    report += "KEY INSIGHTS\n";
    report += "------------\n";
    insights.forEach((insight, i) => {
      report += `\( {i + 1}. [ \){insight.type}] ${insight.text}\n`;
    });

    report += "\n========================================\n";
    report += "End of Report - InsightForge\n";
    report += "========================================\n";

    return report;
  }

  function downloadReport() {
    const report = generateReport();
    const blob = new Blob([report], { type: "text/plain;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `InsightForge_Report_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return {
    generateReport,
    downloadReport
  };
})();
