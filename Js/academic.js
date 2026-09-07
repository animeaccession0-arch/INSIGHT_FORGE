/**
 * InsightForge - Academic Inbound Module
 * Analyzes academic / application style datasets
 */

const AcademicModule = (() => {

  function detectAcademicColumns(headers) {
    const lower = headers.map(h => h.toLowerCase());
    return {
      score: headers.find((_, i) => /score|gpa|marks|grade|percentage/i.test(lower[i])) || null,
      english: headers.find((_, i) => /english|toefl|ielts|det|language/i.test(lower[i])) || null,
      experience: headers.find((_, i) => /experience|research|project|internship/i.test(lower[i])) || null,
      leadership: headers.find((_, i) => /leadership|position|role|extracurricular/i.test(lower[i])) || null
    };
  }

  function analyzeAcademic() {
    const { data, headers } = DataModule.getData();
    if (!data || data.length === 0) return [];

    const cols = detectAcademicColumns(headers);
    const insights = [];

    if (cols.score) {
      const stats = DataModule.getColumnStats(cols.score);
      if (stats) {
        insights.push({
          type: "Calculated",
          text: `Academic Score (${cols.score}) → Mean: ${stats.mean.toFixed(2)}, Median: ${stats.median.toFixed(2)}`
        });

        if (stats.mean >= 85) {
          insights.push({
            type: "Heuristic",
            text: "Overall academic performance appears strong."
          });
        } else if (stats.mean < 60) {
          insights.push({
            type: "Heuristic",
            text: "Average academic scores are relatively low."
          });
        }
      }
    }

    if (cols.english) {
      const stats = DataModule.getColumnStats(cols.english);
      if (stats) {
        insights.push({
          type: "Calculated",
          text: `English proficiency scores average ${stats.mean.toFixed(2)}`
        });
      }
    }

    if (!cols.score && !cols.english) {
      insights.push({
        type: "Heuristic",
        text: "No clear academic score or English proficiency columns detected."
      });
    }

    insights.push({
      type: "Calculated",
      text: "Academic analysis is based only on available columns in the dataset."
    });

    return insights;
  }

  return {
    analyzeAcademic
  };
})();
