/**
 * InsightForge - Main Application
 */

document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.getElementById('fileInput');
  const fileInfo = document.getElementById('fileInfo');
  const overviewSection = document.getElementById('overviewSection');
  const previewSection = document.getElementById('previewSection');
  const chartsSection = document.getElementById('chartsSection');
  const insightsSection = document.getElementById('insightsSection');
  const statsGrid = document.getElementById('statsGrid');
  const dataTable = document.getElementById('dataTable');
  const columnSelect = document.getElementById('columnSelect');
  const chartType = document.getElementById('chartType');
  const generateChartBtn = document.getElementById('generateChartBtn');
  const insightsList = document.getElementById('insightsList');

  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    fileInfo.textContent = `Loading: ${file.name}...`;

    try {
      await DataModule.parseCSV(file);
      fileInfo.textContent = `Loaded: ${file.name}`;

      renderOverview();
      renderPreview();
      setupChartControls();
      renderInsights();

      overviewSection.hidden = false;
      previewSection.hidden = false;
      chartsSection.hidden = false;
      insightsSection.hidden = false;

    } catch (err) {
      fileInfo.textContent = `Error: ${err}`;
      console.error(err);
    }
  });

  generateChartBtn.addEventListener('click', () => {
    const column = columnSelect.value;
    const type = chartType.value;
    if (column) {
      ChartsModule.generateChart(column, type);
    }
  });

  function renderOverview() {
    const stats = DataModule.getBasicStats();
    statsGrid.innerHTML = `
      <div class="stat-box">
        <div class="label">Rows</div>
        <div class="value">${stats.rows}</div>
      </div>
      <div class="stat-box">
        <div class="label">Columns</div>
        <div class="value">${stats.columns}</div>
      </div>
      <div class="stat-box">
        <div class="label">Numeric Columns</div>
        <div class="value">${stats.numericColumns}</div>
      </div>
      <div class="stat-box">
        <div class="label">Missing Values</div>
        <div class="value">${stats.missingValues}</div>
      </div>
    `;
  }

  function renderPreview() {
    const { data, headers } = DataModule.getData();
    const previewRows = data.slice(0, 8);

    let html = '<thead><tr>';
    headers.forEach(h => html += `<th>${h}</th>`);
    html += '</tr></thead><tbody>';

    previewRows.forEach(row => {
      html += '<tr>';
      headers.forEach(h => {
        const val = row[h] !== null && row[h] !== undefined ? row[h] : '—';
        html += `<td>${val}</td>`;
      });
      html += '</tr>';
    });

    html += '</tbody>';
    dataTable.innerHTML = html;
  }

  function setupChartControls() {
    const numericCols = DataModule.getNumericColumns();
    columnSelect.innerHTML = '';

    numericCols.forEach(col => {
      const option = document.createElement('option');
      option.value = col;
      option.textContent = col;
      columnSelect.appendChild(option);
    });

    if (numericCols.length > 0) {
      ChartsModule.generateChart(numericCols[0], 'bar');
    }
  }

  function renderInsights() {
    const insights = InsightsModule.generateInsights();
    insightsList.innerHTML = '';

    insights.forEach(insight => {
      const div = document.createElement('div');
      div.className = 'insight-item';
      div.innerHTML = `
        <div class="type">${insight.type}</div>
        <div>${insight.text}</div>
      `;
      insightsList.appendChild(div);
    });
  }
});
<script src="js/product.js"></script>
<script src="js/predictive.js"></script>
<script src="js/academic.js"></script>
