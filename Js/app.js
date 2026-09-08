/**
 * InsightForge - Main Application
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===== Language System =====
  if (typeof I18n !== 'undefined') {
    I18n.init();
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
      languageSelect.value = I18n.getCurrentLanguage();
      languageSelect.addEventListener('change', (e) => {
        I18n.setLanguage(e.target.value);
      });
    }
  }

  // ===== File Upload =====
  const fileInput = document.getElementById('fileInput');
  const fileInfo = document.getElementById('fileInfo');

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
      renderHeritageQC();   // ← Heritage QC connected here

      document.getElementById('overviewSection').hidden = false;
      document.getElementById('previewSection').hidden = false;
      document.getElementById('chartsSection').hidden = false;
      document.getElementById('insightsSection').hidden = false;
      document.getElementById('heritageSection').hidden = false;

    } catch (err) {
      fileInfo.textContent = `Error: ${err}`;
      console.error(err);
    }
  });

  // ===== Chart Button =====
  document.getElementById('generateChartBtn').addEventListener('click', () => {
    const column = document.getElementById('columnSelect').value;
    const type = document.getElementById('chartType').value;
    if (column) {
      ChartsModule.generateChart(column, type);
    }
  });

  // ===== Render Functions =====
  function renderOverview() {
    const stats = DataModule.getBasicStats();
    document.getElementById('statsGrid').innerHTML = `
      <div class="stat-box"><div class="label">Rows</div><div class="value">${stats.rows}</div></div>
      <div class="stat-box"><div class="label">Columns</div><div class="value">${stats.columns}</div></div>
      <div class="stat-box"><div class="label">Numeric Columns</div><div class="value">${stats.numericColumns}</div></div>
      <div class="stat-box"><div class="label">Missing Values</div><div class="value">${stats.missingValues}</div></div>
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
        html += `<td>${row[h] ?? '—'}</td>`;
      });
      html += '</tr>';
    });
    html += '</tbody>';
    document.getElementById('dataTable').innerHTML = html;
  }

  function setupChartControls() {
    const numericCols = DataModule.getNumericColumns();
    const select = document.getElementById('columnSelect');
    select.innerHTML = '';
    numericCols.forEach(col => {
      const option = document.createElement('option');
      option.value = col;
      option.textContent = col;
      select.appendChild(option);
    });
    if (numericCols.length > 0) {
      ChartsModule.generateChart(numericCols[0], 'bar');
    }
  }

  function renderInsights() {
    const insights = InsightsModule.generateInsights();
    const list = document.getElementById('insightsList');
    list.innerHTML = '';
    insights.forEach(insight => {
      const div = document.createElement('div');
      div.className = 'insight-item';
      div.innerHTML = `<div class="type">\( {insight.type}</div><div> \){insight.text}</div>`;
      list.appendChild(div);
    });
  }

  // ===== Heritage QC =====
  function renderHeritageQC() {
    const result = HeritageQC.analyzeQuality();
    const scoreEl = document.getElementById('qcScore');
    const labelEl = document.getElementById('qcLabel');
    const detailsEl = document.getElementById('qcDetails');
    const issuesEl = document.getElementById('qcIssues');

    scoreEl.textContent = result.score;
    labelEl.textContent = HeritageQC.getQualityLabel(result.score);

    if (result.score >= 85) scoreEl.style.color = '#4ade80';
    else if (result.score >= 70) scoreEl.style.color = '#38bdf8';
    else if (result.score >= 50) scoreEl.style.color = '#fbbf24';
    else scoreEl.style.color = '#f87171';

    detailsEl.innerHTML = `
      <div class="qc-detail-item"><div class="label">Total Rows</div><div class="value">${result.details.totalRows || 0}</div></div>
      <div class="qc-detail-item"><div class="label">Total Columns</div><div class="value">${result.details.totalColumns || 0}</div></div>
      <div class="qc-detail-item"><div class="label">Missing Values</div><div class="value">${result.details.missingValues || 0}</div></div>
      <div class="qc-detail-item"><div class="label">Duplicate Rows</div><div class="value">${result.details.duplicateRows || 0}</div></div>
      <div class="qc-detail-item"><div class="label">Completeness</div><div class="value">${result.details.completeness || '0%'}</div></div>
    `;

    issuesEl.innerHTML = result.issues.map(issue => 
      `<div class="qc-issue">${issue}</div>`
    ).join('');
  }

  // ===== Review System =====
  const stars = document.querySelectorAll('.star');
  const selectedRatingInput = document.getElementById('selectedRating');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const value = star.getAttribute('data-value');
      selectedRatingInput.value = value;
      stars.forEach(s => {
        s.classList.toggle('active', s.getAttribute('data-value') <= value);
      });
    });
  });

  document.getElementById('submitReviewBtn').addEventListener('click', () => {
    const name = document.getElementById('reviewerName').value;
    const rating = document.getElementById('selectedRating').value;
    const comment = document.getElementById('reviewComment').value;
    const message = document.getElementById('reviewMessage');

    if (rating == 0) {
      message.textContent = "Please select a rating.";
      message.style.color = "#f87171";
      return;
    }

    ReviewSystem.saveReview(name, rating, comment);
    message.textContent = "Thank you for your review!";
    message.style.color = "#4ade80";

    document.getElementById('reviewerName').value = "";
    document.getElementById('reviewComment').value = "";
    selectedRatingInput.value = 0;
    stars.forEach(s => s.classList.remove('active'));
  });

  // ===== Admin Panel =====
  document.getElementById('adminLoginBtn').addEventListener('click', () => {
    const password = document.getElementById('adminPassword').value;
    const error = document.getElementById('adminError');

    if (AdminPanel.login(password)) {
      document.getElementById('adminLogin').hidden = true;
      document.getElementById('adminDashboard').hidden = false;
      AdminPanel.renderReviews('adminReviewsList');
      error.textContent = "";
    } else {
      error.textContent = "Wrong password!";
    }
  });

  document.getElementById('logoutAdminBtn').addEventListener('click', () => {
    document.getElementById('adminLogin').hidden = false;
    document.getElementById('adminDashboard').hidden = true;
    document.getElementById('adminPassword').value = "";
  });

  document.getElementById('clearReviewsBtn').addEventListener('click', () => {
    if (confirm("Are you sure you want to delete all reviews?")) {
      ReviewSystem.clearAllReviews();
      AdminPanel.renderReviews('adminReviewsList');
    }
  });

});
