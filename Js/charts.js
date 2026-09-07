/**
 * InsightForge - Charts Module
 * Handles chart generation using Chart.js
 */

const ChartsModule = (() => {
  let chartInstance = null;

  function generateChart(column, type = 'bar') {
    const { data } = DataModule.getData();
    if (!data || data.length === 0) return;

    const values = data
      .map(row => row[column])
      .filter(v => typeof v === 'number' && !isNaN(v));

    if (values.length === 0) {
      alert('Selected column has no numeric data.');
      return;
    }

    const ctx = document.getElementById('mainChart').getContext('2d');

    if (chartInstance) {
      chartInstance.destroy();
    }

    // For pie/doughnut we show distribution of values (binned)
    let chartData, chartOptions;

    if (type === 'pie' || type === 'doughnut') {
      // Simple frequency distribution
      const frequency = {};
      values.forEach(v => {
        const key = v.toFixed(1);
        frequency[key] = (frequency[key] || 0) + 1;
      });

      chartData = {
        labels: Object.keys(frequency),
        datasets: [{
          data: Object.values(frequency),
          backgroundColor: generateColors(Object.keys(frequency).length),
          borderWidth: 0
        }]
      };
    } else {
      chartData = {
        labels: values.map((_, i) => i + 1),
        datasets: [{
          label: column,
          data: values,
          backgroundColor: type === 'bar' ? 'rgba(56, 189, 248, 0.7)' : 'rgba(56, 189, 248, 0.15)',
          borderColor: '#38bdf8',
          borderWidth: 2,
          tension: 0.3,
          fill: type === 'line'
        }]
      };
    }

    chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: { color: '#94a3b8' }
        }
      },
      scales: type === 'pie' || type === 'doughnut' ? {} : {
        x: {
          ticks: { color: '#94a3b8' },
          grid: { color: 'rgba(148, 163, 184, 0.08)' }
        },
        y: {
          ticks: { color: '#94a3b8' },
          grid: { color: 'rgba(148, 163, 184, 0.08)' }
        }
      }
    };

    chartInstance = new Chart(ctx, {
      type: type,
      data: chartData,
      options: chartOptions
    });
  }

  function generateColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const hue = (i * 137.5) % 360;
      colors.push(`hsla(${hue}, 70%, 60%, 0.8)`);
    }
    return colors;
  }

  return {
    generateChart
  };
})();
