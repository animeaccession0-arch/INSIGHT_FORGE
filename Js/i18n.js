/**
 * InsightForge - Multilingual System (i18n)
 * Phase 1: English, Hindi, Japanese, Spanish, French, German
 */

const I18n = (() => {

  const translations = {

    // ===================== ENGLISH =====================
    en: {
      "app.title": "InsightForge",
      "app.tagline": "Turn Raw Data Into Decisions",

      "upload.title": "Upload Dataset",
      "upload.subtitle": "Upload a CSV file to begin analysis",
      "upload.loading": "Loading",
      "upload.loaded": "Loaded",
      "upload.error": "Error",

      "overview.title": "Dataset Overview",
      "overview.rows": "Rows",
      "overview.columns": "Columns",
      "overview.numeric": "Numeric Columns",
      "overview.missing": "Missing Values",

      "preview.title": "Data Preview",

      "charts.title": "Visualizations",
      "charts.generate": "Generate Chart",
      "charts.bar": "Bar Chart",
      "charts.line": "Line Chart",
      "charts.pie": "Pie Chart",
      "charts.doughnut": "Doughnut Chart",

      "insights.title": "Key Insights",

      "footer.text": "InsightForge • Built with transparency and purpose",
      "lang.label": "Language"
    },

    // ===================== HINDI =====================
    hi: {
      "app.title": "InsightForge",
      "app.tagline": "कच्चे डेटा को निर्णयों में बदलें",

      "upload.title": "डेटासेट अपलोड करें",
      "upload.subtitle": "विश्लेषण शुरू करने के लिए CSV फ़ाइल अपलोड करें",
      "upload.loading": "लोड हो रहा है",
      "upload.loaded": "लोड हो गया",
      "upload.error": "त्रुटि",

      "overview.title": "डेटासेट अवलोकन",
      "overview.rows": "पंक्तियाँ",
      "overview.columns": "कॉलम",
      "overview.numeric": "संख्यात्मक कॉलम",
      "overview.missing": "लापता मान",

      "preview.title": "डेटा पूर्वावलोकन",

      "charts.title": "विज़ुअलाइज़ेशन",
      "charts.generate": "चार्ट बनाएं",
      "charts.bar": "बार चार्ट",
      "charts.line": "लाइन चार्ट",
      "charts.pie": "पाई चार्ट",
      "charts.doughnut": "डोनट चार्ट",

      "insights.title": "मुख्य अंतर्दृष्टि",

      "footer.text": "InsightForge • पारदर्शिता के साथ बनाया गया",
      "lang.label": "भाषा"
    },

    // ===================== JAPANESE =====================
    ja: {
      "app.title": "InsightForge",
      "app.tagline": "生データを意思決定に変える",

      "upload.title": "データセットをアップロード",
      "upload.subtitle": "分析を開始するにはCSVファイルをアップロードしてください",
      "upload.loading": "読み込み中",
      "upload.loaded": "読み込み完了",
      "upload.error": "エラー",

      "overview.title": "データセット概要",
      "overview.rows": "行数",
      "overview.columns": "列数",
      "overview.numeric": "数値列",
      "overview.missing": "欠損値",

      "preview.title": "データプレビュー",

      "charts.title": "可視化",
      "charts.generate": "チャートを生成",
      "charts.bar": "棒グラフ",
      "charts.line": "折れ線グラフ",
      "charts.pie": "円グラフ",
      "charts.doughnut": "ドーナツチャート",

      "insights.title": "主要なインサイト",

      "footer.text": "InsightForge • 透明性を重視して構築",
      "lang.label": "言語"
    },

    // ===================== SPANISH =====================
    es: {
      "app.title": "InsightForge",
      "app.tagline": "Convierte datos sin procesar en decisiones",

      "upload.title": "Subir conjunto de datos",
      "upload.subtitle": "Sube un archivo CSV para comenzar el análisis",
      "upload.loading": "Cargando",
      "upload.loaded": "Cargado",
      "upload.error": "Error",

      "overview.title": "Resumen del conjunto de datos",
      "overview.rows": "Filas",
      "overview.columns": "Columnas",
      "overview.numeric": "Columnas numéricas",
      "overview.missing": "Valores faltantes",

      "preview.title": "Vista previa de datos",

      "charts.title": "Visualizaciones",
      "charts.generate": "Generar gráfico",
      "charts.bar": "Gráfico de barras",
      "charts.line": "Gráfico de líneas",
      "charts.pie": "Gráfico circular",
      "charts.doughnut": "Gráfico de dona",

      "insights.title": "Ideas clave",

      "footer.text": "InsightForge • Construido con transparencia",
      "lang.label": "Idioma"
    },

    // ===================== FRENCH =====================
    fr: {
      "app.title": "InsightForge",
      "app.tagline": "Transformer les données brutes en décisions",

      "upload.title": "Télécharger le jeu de données",
      "upload.subtitle": "Téléchargez un fichier CSV pour commencer l'analyse",
      "upload.loading": "Chargement",
      "upload.loaded": "Chargé",
      "upload.error": "Erreur",

      "overview.title": "Aperçu du jeu de données",
      "overview.rows": "Lignes",
      "overview.columns": "Colonnes",
      "overview.numeric": "Colonnes numériques",
      "overview.missing": "Valeurs manquantes",

      "preview.title": "Aperçu des données",

      "charts.title": "Visualisations",
      "charts.generate": "Générer le graphique",
      "charts.bar": "Graphique à barres",
      "charts.line": "Graphique linéaire",
      "charts.pie": "Graphique circulaire",
      "charts.doughnut": "Graphique en anneau",

      "insights.title": "Principales insights",

      "footer.text": "InsightForge • Construit avec transparence",
      "lang.label": "Langue"
    },

    // ===================== GERMAN =====================
    de: {
      "app.title": "InsightForge",
      "app.tagline": "Rohdaten in Entscheidungen verwandeln",

      "upload.title": "Datensatz hochladen",
      "upload.subtitle": "Laden Sie eine CSV-Datei hoch, um die Analyse zu starten",
      "upload.loading": "Wird geladen",
      "upload.loaded": "Geladen",
      "upload.error": "Fehler",

      "overview.title": "Datensatzübersicht",
      "overview.rows": "Zeilen",
      "overview.columns": "Spalten",
      "overview.numeric": "Numerische Spalten",
      "overview.missing": "Fehlende Werte",

      "preview.title": "Datenvorschau",

      "charts.title": "Visualisierungen",
      "charts.generate": "Diagramm erstellen",
      "charts.bar": "Balkendiagramm",
      "charts.line": "Liniendiagramm",
      "charts.pie": "Kreisdiagramm",
      "charts.doughnut": "Donut-Diagramm",

      "insights.title": "Wichtige Erkenntnisse",

      "footer.text": "InsightForge • Mit Transparenz entwickelt",
      "lang.label": "Sprache"
    }
  };

  // ===================== STATE =====================
  let currentLang = localStorage.getItem("insightforge_lang") || "en";

  // ===================== METHODS =====================
  function t(key) {
    return translations[currentLang]?.[key] || translations["en"][key] || key;
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("insightforge_lang", lang);
    applyTranslations();
  }

  function getCurrentLanguage() {
    return currentLang;
  }

  function getAvailableLanguages() {
    return Object.keys(translations);
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (key) {
        el.textContent = t(key);
      }
    });

    // Update page language
    document.documentElement.lang = currentLang;
  }

  function init() {
    applyTranslations();
  }

  return {
    t,
    setLanguage,
    getCurrentLanguage,
    getAvailableLanguages,
    applyTranslations,
    init
  };
})();
// ===================== PORTUGUESE =====================
    pt: {
      "app.title": "InsightForge",
      "app.tagline": "Transforme dados brutos em decisões",

      "upload.title": "Carregar conjunto de dados",
      "upload.subtitle": "Carregue um arquivo CSV para iniciar a análise",
      "upload.loading": "Carregando",
      "upload.loaded": "Carregado",
      "upload.error": "Erro",

      "overview.title": "Visão geral do conjunto de dados",
      "overview.rows": "Linhas",
      "overview.columns": "Colunas",
      "overview.numeric": "Colunas numéricas",
      "overview.missing": "Valores ausentes",

      "preview.title": "Pré-visualização dos dados",

      "charts.title": "Visualizações",
      "charts.generate": "Gerar gráfico",
      "charts.bar": "Gráfico de barras",
      "charts.line": "Gráfico de linhas",
      "charts.pie": "Gráfico de pizza",
      "charts.doughnut": "Gráfico de rosca",

      "insights.title": "Principais insights",

      "footer.text": "InsightForge • Construído com transparência",
      "lang.label": "Idioma"
    },

    // ===================== RUSSIAN =====================
    ru: {
      "app.title": "InsightForge",
      "app.tagline": "Превращайте сырые данные в решения",

      "upload.title": "Загрузить набор данных",
      "upload.subtitle": "Загрузите CSV-файл, чтобы начать анализ",
      "upload.loading": "Загрузка",
      "upload.loaded": "Загружено",
      "upload.error": "Ошибка",

      "overview.title": "Обзор набора данных",
      "overview.rows": "Строки",
      "overview.columns": "Столбцы",
      "overview.numeric": "Числовые столбцы",
      "overview.missing": "Пропущенные значения",

      "preview.title": "Предпросмотр данных",

      "charts.title": "Визуализации",
      "charts.generate": "Создать график",
      "charts.bar": "Столбчатая диаграмма",
      "charts.line": "Линейный график",
      "charts.pie": "Круговая диаграмма",
      "charts.doughnut": "Кольцевая диаграмма",

      "insights.title": "Ключевые выводы",

      "footer.text": "InsightForge • Создано с прозрачностью",
      "lang.label": "Язык"
    },

    // ===================== CHINESE =====================
    zh: {
      "app.title": "InsightForge",
      "app.tagline": "将原始数据转化为决策",

      "upload.title": "上传数据集",
      "upload.subtitle": "上传CSV文件以开始分析",
      "upload.loading": "加载中",
      "upload.loaded": "已加载",
      "upload.error": "错误",

      "overview.title": "数据集概览",
      "overview.rows": "行数",
      "overview.columns": "列数",
      "overview.numeric": "数值列",
      "overview.missing": "缺失值",

      "preview.title": "数据预览",

      "charts.title": "可视化",
      "charts.generate": "生成图表",
      "charts.bar": "柱状图",
      "charts.line": "折线图",
      "charts.pie": "饼图",
      "charts.doughnut": "环形图",

      "insights.title": "关键洞察",

      "footer.text": "InsightForge • 以透明为理念构建",
      "lang.label": "语言"
    },

    // ===================== KOREAN =====================
    ko: {
      "app.title": "InsightForge",
      "app.tagline": "원시 데이터를 의사결정으로 전환",

      "upload.title": "데이터셋 업로드",
      "upload.subtitle": "분석을 시작하려면 CSV 파일을 업로드하세요",
      "upload.loading": "로딩 중",
      "upload.loaded": "로드 완료",
      "upload.error": "오류",

      "overview.title": "데이터셋 개요",
      "overview.rows": "행",
      "overview.columns": "열",
      "overview.numeric": "숫자 열",
      "overview.missing": "결측값",

      "preview.title": "데이터 미리보기",

      "charts.title": "시각화",
      "charts.generate": "차트 생성",
      "charts.bar": "막대 차트",
      "charts.line": "선 차트",
      "charts.pie": "파이 차트",
      "charts.doughnut": "도넛 차트",

      "insights.title": "주요 인사이트",

      "footer.text": "InsightForge • 투명성을 바탕으로 구축",
      "lang.label": "언어"
    },

    // ===================== ARABIC =====================
    ar: {
      "app.title": "InsightForge",
      "app.tagline": "حوّل البيانات الخام إلى قرارات",

      "upload.title": "رفع مجموعة البيانات",
      "upload.subtitle": "قم برفع ملف CSV لبدء التحليل",
      "upload.loading": "جاري التحميل",
      "upload.loaded": "تم التحميل",
      "upload.error": "خطأ",

      "overview.title": "نظرة عامة على مجموعة البيانات",
      "overview.rows": "الصفوف",
      "overview.columns": "الأعمدة",
      "overview.numeric": "الأعمدة الرقمية",
      "overview.missing": "القيم المفقودة",

      "preview.title": "معاينة البيانات",

      "charts.title": "التصورات",
      "charts.generate": "إنشاء الرسم البياني",
      "charts.bar": "رسم بياني شريطي",
      "charts.line": "رسم بياني خطي",
      "charts.pie": "رسم بياني دائري",
      "charts.doughnut": "رسم بياني حلقي",

      "insights.title": "الرؤى الرئيسية",

      "footer.text": "InsightForge • مبني بالشفافية",
      "lang.label": "اللغة"
    },

    // ===================== TURKISH =====================
    tr: {
      "app.title": "InsightForge",
      "app.tagline": "Ham veriyi kararlara dönüştürün",

      "upload.title": "Veri kümesi yükle",
      "upload.subtitle": "Analize başlamak için bir CSV dosyası yükleyin",
      "upload.loading": "Yükleniyor",
      "upload.loaded": "Yüklendi",
      "upload.error": "Hata",

      "overview.title": "Veri kümesi özeti",
      "overview.rows": "Satırlar",
      "overview.columns": "Sütunlar",
      "overview.numeric": "Sayısal sütunlar",
      "overview.missing": "Eksik değerler",

      "preview.title": "Veri önizlemesi",

      "charts.title": "Görselleştirmeler",
      "charts.generate": "Grafik oluştur",
      "charts.bar": "Çubuk grafik",
      "charts.line": "Çizgi grafik",
      "charts.pie": "Pasta grafik",
      "charts.doughnut": "Halka grafik",

      "insights.title": "Temel içgörüler",

      "footer.text": "InsightForge • Şeffaflıkla inşa edildi",
      "lang.label": "Dil"
  }
// ===================== ITALIAN =====================
    it: {
      "app.title": "InsightForge",
      "app.tagline": "Trasforma i dati grezzi in decisioni",

      "upload.title": "Carica dataset",
      "upload.subtitle": "Carica un file CSV per iniziare l'analisi",
      "upload.loading": "Caricamento",
      "upload.loaded": "Caricato",
      "upload.error": "Errore",

      "overview.title": "Panoramica del dataset",
      "overview.rows": "Righe",
      "overview.columns": "Colonne",
      "overview.numeric": "Colonne numeriche",
      "overview.missing": "Valori mancanti",

      "preview.title": "Anteprima dei dati",

      "charts.title": "Visualizzazioni",
      "charts.generate": "Genera grafico",
      "charts.bar": "Grafico a barre",
      "charts.line": "Grafico a linee",
      "charts.pie": "Grafico a torta",
      "charts.doughnut": "Grafico a ciambella",

      "insights.title": "Approfondimenti chiave",

      "footer.text": "InsightForge • Costruito con trasparenza",
      "lang.label": "Lingua"
    },

    // ===================== INDONESIAN =====================
    id: {
      "app.title": "InsightForge",
      "app.tagline": "Ubah data mentah menjadi keputusan",

      "upload.title": "Unggah dataset",
      "upload.subtitle": "Unggah file CSV untuk memulai analisis",
      "upload.loading": "Memuat",
      "upload.loaded": "Berhasil dimuat",
      "upload.error": "Kesalahan",

      "overview.title": "Ikhtisar dataset",
      "overview.rows": "Baris",
      "overview.columns": "Kolom",
      "overview.numeric": "Kolom numerik",
      "overview.missing": "Nilai yang hilang",

      "preview.title": "Pratinjau data",

      "charts.title": "Visualisasi",
      "charts.generate": "Buat bagan",
      "charts.bar": "Bagan batang",
      "charts.line": "Bagan garis",
      "charts.pie": "Bagan pie",
      "charts.doughnut": "Bagan donat",

      "insights.title": "Wawasan utama",

      "footer.text": "InsightForge • Dibangun dengan transparansi",
      "lang.label": "Bahasa"
    },

    // ===================== VIETNAMESE =====================
    vi: {
      "app.title": "InsightForge",
      "app.tagline": "Chuyển dữ liệu thô thành quyết định",

      "upload.title": "Tải lên tập dữ liệu",
      "upload.subtitle": "Tải lên tệp CSV để bắt đầu phân tích",
      "upload.loading": "Đang tải",
      "upload.loaded": "Đã tải",
      "upload.error": "Lỗi",

      "overview.title": "Tổng quan tập dữ liệu",
      "overview.rows": "Hàng",
      "overview.columns": "Cột",
      "overview.numeric": "Cột số",
      "overview.missing": "Giá trị còn thiếu",

      "preview.title": "Xem trước dữ liệu",

      "charts.title": "Trực quan hóa",
      "charts.generate": "Tạo biểu đồ",
      "charts.bar": "Biểu đồ cột",
      "charts.line": "Biểu đồ đường",
      "charts.pie": "Biểu đồ tròn",
      "charts.doughnut": "Biểu đồ vòng",

      "insights.title": "Thông tin chi tiết chính",

      "footer.text": "InsightForge • Được xây dựng với tính minh bạch",
      "lang.label": "Ngôn ngữ"
    },

    // ===================== DUTCH =====================
    nl: {
      "app.title": "InsightForge",
      "app.tagline": "Zet ruwe data om in beslissingen",

      "upload.title": "Dataset uploaden",
      "upload.subtitle": "Upload een CSV-bestand om de analyse te starten",
      "upload.loading": "Laden",
      "upload.loaded": "Geladen",
      "upload.error": "Fout",

      "overview.title": "Datasetoverzicht",
      "overview.rows": "Rijen",
      "overview.columns": "Kolommen",
      "overview.numeric": "Numerieke kolommen",
      "overview.missing": "Ontbrekende waarden",

      "preview.title": "Gegevensvoorbeeld",

      "charts.title": "Visualisaties",
      "charts.generate": "Grafiek genereren",
      "charts.bar": "Staafdiagram",
      "charts.line": "Lijndiagram",
      "charts.pie": "Cirkeldiagram",
      "charts.doughnut": "Donutdiagram",

      "insights.title": "Belangrijke inzichten",

      "footer.text": "InsightForge • Gebouwd met transparantie",
      "lang.label": "Taal"
    },

    // ===================== POLISH =====================
    pl: {
      "app.title": "InsightForge",
      "app.tagline": "Zamień surowe dane w decyzje",

      "upload.title": "Prześlij zestaw danych",
      "upload.subtitle": "Prześlij plik CSV, aby rozpocząć analizę",
      "upload.loading": "Ładowanie",
      "upload.loaded": "Załadowano",
      "upload.error": "Błąd",

      "overview.title": "Przegląd zestawu danych",
      "overview.rows": "Wiersze",
      "overview.columns": "Kolumny",
      "overview.numeric": "Kolumny numeryczne",
      "overview.missing": "Brakujące wartości",

      "preview.title": "Podgląd danych",

      "charts.title": "Wizualizacje",
      "charts.generate": "Generuj wykres",
      "charts.bar": "Wykres słupkowy",
      "charts.line": "Wykres liniowy",
      "charts.pie": "Wykres kołowy",
      "charts.doughnut": "Wykres pierścieniowy",

      "insights.title": "Kluczowe wnioski",

      "footer.text": "InsightForge • Zbudowany z przejrzystością",
      "lang.label": "Język"
    },

    // ===================== THAI =====================
    th: {
      "app.title": "InsightForge",
      "app.tagline": "เปลี่ยนข้อมูลดิบให้เป็นการตัดสินใจ",

      "upload.title": "อัปโหลดชุดข้อมูล",
      "upload.subtitle": "อัปโหลดไฟล์ CSV เพื่อเริ่มการวิเคราะห์",
      "upload.loading": "กำลังโหลด",
      "upload.loaded": "โหลดแล้ว",
      "upload.error": "ข้อผิดพลาด",

      "overview.title": "ภาพรวมชุดข้อมูล",
      "overview.rows": "แถว",
      "overview.columns": "คอลัมน์",
      "overview.numeric": "คอลัมน์ตัวเลข",
      "overview.missing": "ค่าที่หายไป",

      "preview.title": "ตัวอย่างข้อมูล",

      "charts.title": "การแสดงผล",
      "charts.generate": "สร้างแผนภูมิ",
      "charts.bar": "แผนภูมิแท่ง",
      "charts.line": "แผนภูมิเส้น",
      "charts.pie": "แผนภูมิวงกลม",
      "charts.doughnut": "แผนภูมิโดนัท",

      "insights.title": "ข้อมูลเชิงลึกหลัก",

      "footer.text": "InsightForge • สร้างด้วยความโปร่งใส",
      "lang.label": "ภาษา"
    }
// ===================== BENGALI =====================
    bn: {
      "app.title": "InsightForge",
      "app.tagline": "কাঁচা ডেটাকে সিদ্ধান্তে পরিণত করুন",

      "upload.title": "ডেটাসেট আপলোড করুন",
      "upload.subtitle": "বিশ্লেষণ শুরু করতে একটি CSV ফাইল আপলোড করুন",
      "upload.loading": "লোড হচ্ছে",
      "upload.loaded": "লোড হয়েছে",
      "upload.error": "ত্রুটি",

      "overview.title": "ডেটাসেট ওভারভিউ",
      "overview.rows": "সারি",
      "overview.columns": "কলাম",
      "overview.numeric": "সংখ্যাসূচক কলাম",
      "overview.missing": "অনুপস্থিত মান",

      "preview.title": "ডেটা প্রিভিউ",

      "charts.title": "ভিজ্যুয়ালাইজেশন",
      "charts.generate": "চার্ট তৈরি করুন",
      "charts.bar": "বার চার্ট",
      "charts.line": "লাইন চার্ট",
      "charts.pie": "পাই চার্ট",
      "charts.doughnut": "ডোনাট চার্ট",

      "insights.title": "মূল অন্তর্দৃষ্টি",

      "footer.text": "InsightForge • স্বচ্ছতার সাথে নির্মিত",
      "lang.label": "ভাষা"
    },

    // ===================== URDU =====================
    ur: {
      "app.title": "InsightForge",
      "app.tagline": "خام ڈیٹا کو فیصلوں میں تبدیل کریں",

      "upload.title": "ڈیٹاسیٹ اپ لوڈ کریں",
      "upload.subtitle": "تجزیہ شروع کرنے کے لیے CSV فائل اپ لوڈ کریں",
      "upload.loading": "لوڈ ہو رہا ہے",
      "upload.loaded": "لوڈ ہو گیا",
      "upload.error": "خرابی",

      "overview.title": "ڈیٹاسیٹ کا جائزہ",
      "overview.rows": "قطاریں",
      "overview.columns": "کالم",
      "overview.numeric": "عددی کالم",
      "overview.missing": "غائب اقدار",

      "preview.title": "ڈیٹا کا پیش منظر",

      "charts.title": "تصویری نمائش",
      "charts.generate": "چارٹ بنائیں",
      "charts.bar": "بار چارٹ",
      "charts.line": "لائن چارٹ",
      "charts.pie": "پائی چارٹ",
      "charts.doughnut": "ڈونٹ چارٹ",

      "insights.title": "اہم بصیرتیں",

      "footer.text": "InsightForge • شفافیت کے ساتھ بنایا گیا",
      "lang.label": "زبان"
    },

    // ===================== MALAY =====================
    ms: {
      "app.title": "InsightForge",
      "app.tagline": "Tukar data mentah menjadi keputusan",

      "upload.title": "Muat naik set data",
      "upload.subtitle": "Muat naik fail CSV untuk memulakan analisis",
      "upload.loading": "Memuatkan",
      "upload.loaded": "Dimuatkan",
      "upload.error": "Ralat",

      "overview.title": "Gambaran keseluruhan set data",
      "overview.rows": "Baris",
      "overview.columns": "Lajur",
      "overview.numeric": "Lajur berangka",
      "overview.missing": "Nilai yang hilang",

      "preview.title": "Pratonton data",

      "charts.title": "Visualisasi",
      "charts.generate": "Jana carta",
      "charts.bar": "Carta bar",
      "charts.line": "Carta garis",
      "charts.pie": "Carta pai",
      "charts.doughnut": "Carta donut",

      "insights.title": "Cerapan utama",

      "footer.text": "InsightForge • Dibina dengan ketelusan",
      "lang.label": "Bahasa"
    },

    // ===================== SWEDISH =====================
    sv: {
      "app.title": "InsightForge",
      "app.tagline": "Omvandla rådata till beslut",

      "upload.title": "Ladda upp dataset",
      "upload.subtitle": "Ladda upp en CSV-fil för att börja analysen",
      "upload.loading": "Laddar",
      "upload.loaded": "Laddad",
      "upload.error": "Fel",

      "overview.title": "Datasetöversikt",
      "overview.rows": "Rader",
      "overview.columns": "Kolumner",
      "overview.numeric": "Numeriska kolumner",
      "overview.missing": "Saknade värden",

      "preview.title": "Dataförhandsvisning",

      "charts.title": "Visualiseringar",
      "charts.generate": "Generera diagram",
      "charts.bar": "Stapeldiagram",
      "charts.line": "Linjediagram",
      "charts.pie": "Cirkeldiagram",
      "charts.doughnut": "Munkdiagram",

      "insights.title": "Viktiga insikter",

      "footer.text": "InsightForge • Byggd med transparens",
      "lang.label": "Språk"
    },

    // ===================== UKRAINIAN =====================
    uk: {
      "app.title": "InsightForge",
      "app.tagline": "Перетворюйте сирі дані на рішення",

      "upload.title": "Завантажити набір даних",
      "upload.subtitle": "Завантажте CSV-файл, щоб почати аналіз",
      "upload.loading": "Завантаження",
      "upload.loaded": "Завантажено",
      "upload.error": "Помилка",

      "overview.title": "Огляд набору даних",
      "overview.rows": "Рядки",
      "overview.columns": "Стовпці",
      "overview.numeric": "Числові стовпці",
      "overview.missing": "Пропущені значення",

      "preview.title": "Попередній перегляд даних",

      "charts.title": "Візуалізації",
      "charts.generate": "Створити діаграму",
      "charts.bar": "Стовпчаста діаграма",
      "charts.line": "Лінійний графік",
      "charts.pie": "Кругова діаграма",
      "charts.doughnut": "Кільцева діаграма",

      "insights.title": "Ключові висновки",

      "footer.text": "InsightForge • Створено з прозорістю",
      "lang.label": "Мова"
    },

    // ===================== GREEK =====================
    el: {
      "app.title": "InsightForge",
      "app.tagline": "Μετατρέψτε τα ακατέργαστα δεδομένα σε αποφάσεις",

      "upload.title": "Μεταφόρτωση συνόλου δεδομένων",
      "upload.subtitle": "Μεταφορτώστε ένα αρχείο CSV για να ξεκινήσετε την ανάλυση",
      "upload.loading": "Φόρτωση",
      "upload.loaded": "Φορτώθηκε",
      "upload.error": "Σφάλμα",

      "overview.title": "Επισκόπηση συνόλου δεδομένων",
      "overview.rows": "Γραμμές",
      "overview.columns": "Στήλες",
      "overview.numeric": "Αριθμητικές στήλες",
      "overview.missing": "Ελλιπείς τιμές",

      "preview.title": "Προεπισκόπηση δεδομένων",

      "charts.title": "Οπτικοποιήσεις",
      "charts.generate": "Δημιουργία γραφήματος",
      "charts.bar": "Ραβδόγραμμα",
      "charts.line": "Γραμμικό γράφημα",
      "charts.pie": "Κυκλικό διάγραμμα",
      "charts.doughnut": "Δακτυλιοειδές διάγραμμα",

      "insights.title": "Βασικές πληροφορίες",

      "footer.text": "InsightForge • Δημιουργήθηκε με διαφάνεια",
      "lang.label": "Γλώσσα"
}
// ===================== TAMIL =====================
    ta: {
      "app.title": "InsightForge",
      "app.tagline": "மூல தரவை முடிவுகளாக மாற்றுங்கள்",

      "upload.title": "தரவுத்தொகுப்பை பதிவேற்றவும்",
      "upload.subtitle": "பகுப்பாய்வைத் தொடங்க CSV கோப்பை பதிவேற்றவும்",
      "upload.loading": "ஏற்றுகிறது",
      "upload.loaded": "ஏற்றப்பட்டது",
      "upload.error": "பிழை",

      "overview.title": "தரவுத்தொகுப்பு மேற்பார்வை",
      "overview.rows": "வரிசைகள்",
      "overview.columns": "நெடுவரிசைகள்",
      "overview.numeric": "எண் நெடுவரிசைகள்",
      "overview.missing": "காணாமல் போன மதிப்புகள்",

      "preview.title": "தரவு முன்னோட்டம்",

      "charts.title": "காட்சிப்படுத்தல்கள்",
      "charts.generate": "விளக்கப்படம் உருவாக்கு",
      "charts.bar": "பட்டை விளக்கப்படம்",
      "charts.line": "கோட்டு விளக்கப்படம்",
      "charts.pie": "வட்ட விளக்கப்படம்",
      "charts.doughnut": "டோனட் விளக்கப்படம்",

      "insights.title": "முக்கிய நுண்ணறிவுகள்",

      "footer.text": "InsightForge • வெளிப்படைத்தன்மையுடன் உருவாக்கப்பட்டது",
      "lang.label": "மொழி"
    },

    // ===================== TELUGU =====================
    te: {
      "app.title": "InsightForge",
      "app.tagline": "ముడి డేటాను నిర్ణయాలుగా మార్చండి",

      "upload.title": "డేటాసెట్‌ను అప్‌లోడ్ చేయండి",
      "upload.subtitle": "విశ్లేషణ ప్రారంభించడానికి CSV ఫైల్‌ను అప్‌లోడ్ చేయండి",
      "upload.loading": "లోడ్ అవుతోంది",
      "upload.loaded": "లోడ్ అయింది",
      "upload.error": "లోపం",

      "overview.title": "డేటాసెట్ అవలోకనం",
      "overview.rows": "అడ్డు వరుసలు",
      "overview.columns": "నిలువు వరుసలు",
      "overview.numeric": "సంఖ్యా నిలువు వరుసలు",
      "overview.missing": "తప్పిపోయిన విలువలు",

      "preview.title": "డేటా ప్రివ్యూ",

      "charts.title": "విజువలైజేషన్స్",
      "charts.generate": "చార్ట్ రూపొందించండి",
      "charts.bar": "బార్ చార్ట్",
      "charts.line": "లైన్ చార్ట్",
      "charts.pie": "పై చార్ట్",
      "charts.doughnut": "డోనట్ చార్ట్",

      "insights.title": "ముఖ్యమైన అంతర్దృష్టులు",

      "footer.text": "InsightForge • పారదర్శకతతో నిర్మించబడింది",
      "lang.label": "భాష"
    },

    // ===================== PERSIAN =====================
    fa: {
      "app.title": "InsightForge",
      "app.tagline": "داده‌های خام را به تصمیم تبدیل کنید",

      "upload.title": "بارگذاری مجموعه داده",
      "upload.subtitle": "برای شروع تحلیل، یک فایل CSV بارگذاری کنید",
      "upload.loading": "در حال بارگذاری",
      "upload.loaded": "بارگذاری شد",
      "upload.error": "خطا",

      "overview.title": "نمای کلی مجموعه داده",
      "overview.rows": "ردیف‌ها",
      "overview.columns": "ستون‌ها",
      "overview.numeric": "ستون‌های عددی",
      "overview.missing": "مقادیر گمشده",

      "preview.title": "پیش‌نمایش داده‌ها",

      "charts.title": "مصورسازی‌ها",
      "charts.generate": "ایجاد نمودار",
      "charts.bar": "نمودار میله‌ای",
      "charts.line": "نمودار خطی",
      "charts.pie": "نمودار دایره‌ای",
      "charts.doughnut": "نمودار دونات",

      "insights.title": "بینش‌های کلیدی",

      "footer.text": "InsightForge • ساخته شده با شفافیت",
      "lang.label": "زبان"
    },

    // ===================== HEBREW =====================
    he: {
      "app.title": "InsightForge",
      "app.tagline": "הפוך נתונים גולמיים להחלטות",

      "upload.title": "העלה מערך נתונים",
      "upload.subtitle": "העלה קובץ CSV כדי להתחיל בניתוח",
      "upload.loading": "טוען",
      "upload.loaded": "נטען",
      "upload.error": "שגיאה",

      "overview.title": "סקירת מערך נתונים",
      "overview.rows": "שורות",
      "overview.columns": "עמודות",
      "overview.numeric": "עמודות מספריות",
      "overview.missing": "ערכים חסרים",

      "preview.title": "תצוגה מקדימה של נתונים",

      "charts.title": "ויזואליזציות",
      "charts.generate": "צור תרשים",
      "charts.bar": "תרשים עמודות",
      "charts.line": "תרשים קווי",
      "charts.pie": "תרשים עוגה",
      "charts.doughnut": "תרשים סופגנייה",

      "insights.title": "תובנות מרכזיות",

      "footer.text": "InsightForge • נבנה בשקיפות",
      "lang.label": "שפה"
    },

    // ===================== ROMANIAN =====================
    ro: {
      "app.title": "InsightForge",
      "app.tagline": "Transformă datele brute în decizii",

      "upload.title": "Încarcă setul de date",
      "upload.subtitle": "Încarcă un fișier CSV pentru a începe analiza",
      "upload.loading": "Se încarcă",
      "upload.loaded": "Încărcat",
      "upload.error": "Eroare",

      "overview.title": "Prezentare generală a setului de date",
      "overview.rows": "Rânduri",
      "overview.columns": "Coloane",
      "overview.numeric": "Coloane numerice",
      "overview.missing": "Valori lipsă",

      "preview.title": "Previzualizare date",

      "charts.title": "Vizualizări",
      "charts.generate": "Generează grafic",
      "charts.bar": "Grafic cu bare",
      "charts.line": "Grafic liniar",
      "charts.pie": "Grafic circular",
      "charts.doughnut": "Grafic tip gogoașă",

      "insights.title": "Perspective cheie",

      "footer.text": "InsightForge • Construit cu transparență",
      "lang.label": "Limbă"
    },

    // ===================== CZECH =====================
    cs: {
      "app.title": "InsightForge",
      "app.tagline": "Přeměňte surová data na rozhodnutí",

      "upload.title": "Nahrát datovou sadu",
      "upload.subtitle": "Nahrajte soubor CSV pro zahájení analýzy",
      "upload.loading": "Načítání",
      "upload.loaded": "Načteno",
      "upload.error": "Chyba",

      "overview.title": "Přehled datové sady",
      "overview.rows": "Řádky",
      "overview.columns": "Sloupce",
      "overview.numeric": "Číselné sloupce",
      "overview.missing": "Chybějící hodnoty",

      "preview.title": "Náhled dat",

      "charts.title": "Vizualizace",
      "charts.generate": "Vygenerovat graf",
      "charts.bar": "Sloupcový graf",
      "charts.line": "Čárový graf",
      "charts.pie": "Koláčový graf",
      "charts.doughnut": "Prstencový graf",

      "insights.title": "Klíčové poznatky",

      "footer.text": "InsightForge • Vytvořeno s transparentností",
      "lang.label": "Jazyk"
        }
// ===================== HUNGARIAN =====================
    hu: {
      "app.title": "InsightForge",
      "app.tagline": "Alakítsa a nyers adatokat döntésekké",

      "upload.title": "Adatkészlet feltöltése",
      "upload.subtitle": "Töltsön fel egy CSV-fájlt az elemzés indításához",
      "upload.loading": "Betöltés",
      "upload.loaded": "Betöltve",
      "upload.error": "Hiba",

      "overview.title": "Adatkészlet áttekintése",
      "overview.rows": "Sorok",
      "overview.columns": "Oszlopok",
      "overview.numeric": "Numerikus oszlopok",
      "overview.missing": "Hiányzó értékek",

      "preview.title": "Adatok előnézete",

      "charts.title": "Vizualizációk",
      "charts.generate": "Diagram generálása",
      "charts.bar": "Oszlopdiagram",
      "charts.line": "Vonaldiagram",
      "charts.pie": "Kördiagram",
      "charts.doughnut": "Fánkdiagram",

      "insights.title": "Kulcsfontosságú megállapítások",

      "footer.text": "InsightForge • Átláthatósággal építve",
      "lang.label": "Nyelv"
    },

    // ===================== FINNISH =====================
    fi: {
      "app.title": "InsightForge",
      "app.tagline": "Muuta raakadata päätöksiksi",

      "upload.title": "Lataa tietoaineisto",
      "upload.subtitle": "Lataa CSV-tiedosto aloittaaksesi analyysin",
      "upload.loading": "Ladataan",
      "upload.loaded": "Ladattu",
      "upload.error": "Virhe",

      "overview.title": "Tietoaineiston yleiskatsaus",
      "overview.rows": "Rivit",
      "overview.columns": "Sarakkeet",
      "overview.numeric": "Numeeriset sarakkeet",
      "overview.missing": "Puuttuvat arvot",

      "preview.title": "Tietojen esikatselu",

      "charts.title": "Visualisoinnit",
      "charts.generate": "Luo kaavio",
      "charts.bar": "Pylväskaavio",
      "charts.line": "Viivakaavio",
      "charts.pie": "Ympyräkaavio",
      "charts.doughnut": "Rengaskaavio",

      "insights.title": "Keskeiset oivallukset",

      "footer.text": "InsightForge • Rakennettu läpinäkyvyydellä",
      "lang.label": "Kieli"
    },

    // ===================== DANISH =====================
    da: {
      "app.title": "InsightForge",
      "app.tagline": "Omdan rå data til beslutninger",

      "upload.title": "Upload datasæt",
      "upload.subtitle": "Upload en CSV-fil for at starte analysen",
      "upload.loading": "Indlæser",
      "upload.loaded": "Indlæst",
      "upload.error": "Fejl",

      "overview.title": "Datasætoversigt",
      "overview.rows": "Rækker",
      "overview.columns": "Kolonner",
      "overview.numeric": "Numeriske kolonner",
      "overview.missing": "Manglende værdier",

      "preview.title": "Dataforhåndsvisning",

      "charts.title": "Visualiseringer",
      "charts.generate": "Generer diagram",
      "charts.bar": "Søjlediagram",
      "charts.line": "Linjediagram",
      "charts.pie": "Cirkeldiagram",
      "charts.doughnut": "Donutdiagram",

      "insights.title": "Vigtige indsigter",

      "footer.text": "InsightForge • Bygget med gennemsigtighed",
      "lang.label": "Sprog"
    },

    // ===================== NORWEGIAN =====================
    no: {
      "app.title": "InsightForge",
      "app.tagline": "Gjør rådata om til beslutninger",

      "upload.title": "Last opp datasett",
      "upload.subtitle": "Last opp en CSV-fil for å starte analysen",
      "upload.loading": "Laster",
      "upload.loaded": "Lastet",
      "upload.error": "Feil",

      "overview.title": "Datasettoversikt",
      "overview.rows": "Rader",
      "overview.columns": "Kolonner",
      "overview.numeric": "Numeriske kolonner",
      "overview.missing": "Manglende verdier",

      "preview.title": "Dataforhåndsvisning",

      "charts.title": "Visualiseringer",
      "charts.generate": "Generer diagram",
      "charts.bar": "Stolpediagram",
      "charts.line": "Linjediagram",
      "charts.pie": "Sektordiagram",
      "charts.doughnut": "Donutdiagram",

      "insights.title": "Viktige innsikter",

      "footer.text": "InsightForge • Bygget med åpenhet",
      "lang.label": "Språk"
    },

    // ===================== SLOVAK =====================
    sk: {
      "app.title": "InsightForge",
      "app.tagline": "Premeňte surové dáta na rozhodnutia",

      "upload.title": "Nahrať dátovú sadu",
      "upload.subtitle": "Nahrajte súbor CSV a začnite analýzu",
      "upload.loading": "Načítava sa",
      "upload.loaded": "Načítané",
      "upload.error": "Chyba",

      "overview.title": "Prehľad dátovej sady",
      "overview.rows": "Riadky",
      "overview.columns": "Stĺpce",
      "overview.numeric": "Číselné stĺpce",
      "overview.missing": "Chýbajúce hodnoty",

      "preview.title": "Náhľad dát",

      "charts.title": "Vizualizácie",
      "charts.generate": "Vygenerovať graf",
      "charts.bar": "Stĺpcový graf",
      "charts.line": "Čiarový graf",
      "charts.pie": "Koláčový graf",
      "charts.doughnut": "Prstencový graf",

      "insights.title": "Kľúčové poznatky",

      "footer.text": "InsightForge • Vytvorené s transparentnosťou",
      "lang.label": "Jazyk"
    },

    // ===================== BULGARIAN =====================
    bg: {
      "app.title": "InsightForge",
      "app.tagline": "Превърнете суровите данни в решения",

      "upload.title": "Качване на набор от данни",
      "upload.subtitle": "Качете CSV файл, за да започнете анализа",
      "upload.loading": "Зареждане",
      "upload.loaded": "Заредено",
      "upload.error": "Грешка",

      "overview.title": "Преглед на набора от данни",
      "overview.rows": "Редове",
      "overview.columns": "Колони",
      "overview.numeric": "Числови колони",
      "overview.missing": "Липсващи стойности",

      "preview.title": "Преглед на данни",

      "charts.title": "Визуализации",
      "charts.generate": "Генериране на диаграма",
      "charts.bar": "Стълбовидна диаграма",
      "charts.line": "Линейна диаграма",
      "charts.pie": "Кръгова диаграма",
      "charts.doughnut": "Пръстеновидна диаграма",

      "insights.title": "Ключови прозрения",

      "footer.text": "InsightForge • Създадено с прозрачност",
      "lang.label": "Език"
    }
// ===================== CROATIAN =====================
    hr: {
      "app.title": "InsightForge",
      "app.tagline": "Pretvorite sirove podatke u odluke",

      "upload.title": "Učitaj skup podataka",
      "upload.subtitle": "Učitajte CSV datoteku za početak analize",
      "upload.loading": "Učitavanje",
      "upload.loaded": "Učitano",
      "upload.error": "Greška",

      "overview.title": "Pregled skupa podataka",
      "overview.rows": "Retci",
      "overview.columns": "Stupci",
      "overview.numeric": "Numerički stupci",
      "overview.missing": "Nedostajuće vrijednosti",

      "preview.title": "Pregled podataka",

      "charts.title": "Vizualizacije",
      "charts.generate": "Generiraj grafikon",
      "charts.bar": "Trakasti grafikon",
      "charts.line": "Linijski grafikon",
      "charts.pie": "Kružni grafikon",
      "charts.doughnut": "Prstenasti grafikon",

      "insights.title": "Ključni uvidi",

      "footer.text": "InsightForge • Izrađeno s transparentnošću",
      "lang.label": "Jezik"
    },

    // ===================== SERBIAN =====================
    sr: {
      "app.title": "InsightForge",
      "app.tagline": "Претворите сирове податке у одлуке",

      "upload.title": "Отпреми скуп података",
      "upload.subtitle": "Отпремите CSV датотеку да бисте започели анализу",
      "upload.loading": "Учитавање",
      "upload.loaded": "Учитано",
      "upload.error": "Грешка",

      "overview.title": "Преглед скупа података",
      "overview.rows": "Редови",
      "overview.columns": "Колоне",
      "overview.numeric": "Нумеричке колоне",
      "overview.missing": "Недостајуће вредности",

      "preview.title": "Преглед података",

      "charts.title": "Визуелизације",
      "charts.generate": "Генериши графикон",
      "charts.bar": "Тракасти графикон",
      "charts.line": "Линијски графикон",
      "charts.pie": "Кружни графикон",
      "charts.doughnut": "Прстенасти графикон",

      "insights.title": "Кључни увиди",

      "footer.text": "InsightForge • Направљено са транспарентношћу",
      "lang.label": "Језик"
    },

    // ===================== SLOVENIAN =====================
    sl: {
      "app.title": "InsightForge",
      "app.tagline": "Pretvorite surove podatke v odločitve",

      "upload.title": "Naloži nabor podatkov",
      "upload.subtitle": "Naložite datoteko CSV za začetek analize",
      "upload.loading": "Nalaganje",
      "upload.loaded": "Naloženo",
      "upload.error": "Napaka",

      "overview.title": "Pregled nabora podatkov",
      "overview.rows": "Vrstice",
      "overview.columns": "Stolpci",
      "overview.numeric": "Številski stolpci",
      "overview.missing": "Manjkajoče vrednosti",

      "preview.title": "Predogled podatkov",

      "charts.title": "Vizualizacije",
      "charts.generate": "Ustvari grafikon",
      "charts.bar": "Stolpčni grafikon",
      "charts.line": "Črtni grafikon",
      "charts.pie": "Tortni grafikon",
      "charts.doughnut": "Kolobarni grafikon",

      "insights.title": "Ključni vpogledi",

      "footer.text": "InsightForge • Zgrajeno s preglednostjo",
      "lang.label": "Jezik"
    },

    // ===================== LITHUANIAN =====================
    lt: {
      "app.title": "InsightForge",
      "app.tagline": "Paverskite žalius duomenis sprendimais",

      "upload.title": "Įkelti duomenų rinkinį",
      "upload.subtitle": "Įkelkite CSV failą, kad pradėtumėte analizę",
      "upload.loading": "Įkeliama",
      "upload.loaded": "Įkelta",
      "upload.error": "Klaida",

      "overview.title": "Duomenų rinkinio apžvalga",
      "overview.rows": "Eilutės",
      "overview.columns": "Stulpeliai",
      "overview.numeric": "Skaitiniai stulpeliai",
      "overview.missing": "Trūkstamos reikšmės",

      "preview.title": "Duomenų peržiūra",

      "charts.title": "Vizualizacijos",
      "charts.generate": "Generuoti diagramą",
      "charts.bar": "Stulpelinė diagrama",
      "charts.line": "Linijinė diagrama",
      "charts.pie": "Skritulinė diagrama",
      "charts.doughnut": "Žiedinė diagrama",

      "insights.title": "Pagrindinės įžvalgos",

      "footer.text": "InsightForge • Sukurta skaidriai",
      "lang.label": "Kalba"
    },

    // ===================== LATVIAN =====================
    lv: {
      "app.title": "InsightForge",
      "app.tagline": "Pārvērtiet neapstrādātus datus lēmumos",

      "upload.title": "Augšupielādēt datu kopu",
      "upload.subtitle": "Augšupielādējiet CSV failu, lai sāktu analīzi",
      "upload.loading": "Ielādē",
      "upload.loaded": "Ielādēts",
      "upload.error": "Kļūda",

      "overview.title": "Datu kopas pārskats",
      "overview.rows": "Rindas",
      "overview.columns": "Kolonnas",
      "overview.numeric": "Skaitliskās kolonnas",
      "overview.missing": "Trūkstošās vērtības",

      "preview.title": "Datu priekšskatījums",

      "charts.title": "Vizualizācijas",
      "charts.generate": "Ģenerēt diagrammu",
      "charts.bar": "Joslu diagramma",
      "charts.line": "Līniju diagramma",
      "charts.pie": "Sektoru diagramma",
      "charts.doughnut": "Gredzenu diagramma",

      "insights.title": "Galvenie ieskati",

      "footer.text": "InsightForge • Veidots ar caurspīdīgumu",
      "lang.label": "Valoda"
    },

    // ===================== ESTONIAN =====================
    et: {
      "app.title": "InsightForge",
      "app.tagline": "Muuda toorandmed otsusteks",

      "upload.title": "Laadi üles andmestik",
      "upload.subtitle": "Laadi üles CSV-fail analüüsi alustamiseks",
      "upload.loading": "Laadimine",
      "upload.loaded": "Laaditud",
      "upload.error": "Viga",

      "overview.title": "Andmestiku ülevaade",
      "overview.rows": "Read",
      "overview.columns": "Veerud",
      "overview.numeric": "Arvulised veerud",
      "overview.missing": "Puuduvad väärtused",

      "preview.title": "Andmete eelvaade",

      "charts.title": "Visualiseeringud",
      "charts.generate": "Loo diagramm",
      "charts.bar": "Tulpdiagramm",
      "charts.line": "Joondiagramm",
      "charts.pie": "Sektordiagramm",
      "charts.doughnut": "Sõõrikdiagramm",

      "insights.title": "Peamised teadmised",

      "footer.text": "InsightForge • Ehitatud läbipaistvusega",
      "lang.label": "Keel"
}
// ===================== FILIPINO (TAGALOG) =====================
    tl: {
      "app.title": "InsightForge",
      "app.tagline": "Gawing desisyon ang hilaw na data",

      "upload.title": "Mag-upload ng dataset",
      "upload.subtitle": "Mag-upload ng CSV file upang simulan ang pagsusuri",
      "upload.loading": "Naglo-load",
      "upload.loaded": "Na-load na",
      "upload.error": "Error",

      "overview.title": "Pangkalahatang-ideya ng dataset",
      "overview.rows": "Mga Hanay",
      "overview.columns": "Mga Kolum",
      "overview.numeric": "Mga Numerong Kolum",
      "overview.missing": "Mga Nawawalang Halaga",

      "preview.title": "Preview ng Data",

      "charts.title": "Mga Visualization",
      "charts.generate": "Bumuo ng Chart",
      "charts.bar": "Bar Chart",
      "charts.line": "Line Chart",
      "charts.pie": "Pie Chart",
      "charts.doughnut": "Doughnut Chart",

      "insights.title": "Mga Pangunahing Insight",

      "footer.text": "InsightForge • Ginawa nang may transparency",
      "lang.label": "Wika"
    },

    // ===================== SWAHILI =====================
    sw: {
      "app.title": "InsightForge",
      "app.tagline": "Geuza data ghafi kuwa maamuzi",

      "upload.title": "Pakia seti ya data",
      "upload.subtitle": "Pakia faili ya CSV ili kuanza uchambuzi",
      "upload.loading": "Inapakia",
      "upload.loaded": "Imepakuliwa",
      "upload.error": "Hitilafu",

      "overview.title": "Muhtasari wa seti ya data",
      "overview.rows": "Safu",
      "overview.columns": "Safu wima",
      "overview.numeric": "Safu wima za nambari",
      "overview.missing": "Thamani zinazokosekana",

      "preview.title": "Hakiki ya Data",

      "charts.title": "Uonyeshaji",
      "charts.generate": "Tengeneza Chati",
      "charts.bar": "Chati ya Pau",
      "charts.line": "Chati ya Mstari",
      "charts.pie": "Chati ya Pai",
      "charts.doughnut": "Chati ya Donati",

      "insights.title": "Ufahamu Muhimu",

      "footer.text": "InsightForge • Imejengwa kwa uwazi",
      "lang.label": "Lugha"
    },

    // ===================== AFRIKAANS =====================
    af: {
      "app.title": "InsightForge",
      "app.tagline": "Verander rou data in besluite",

      "upload.title": "Laai datastel op",
      "upload.subtitle": "Laai 'n CSV-lêer op om die ontleding te begin",
      "upload.loading": "Laai tans",
      "upload.loaded": "Gelaai",
      "upload.error": "Fout",

      "overview.title": "Datasteloorsig",
      "overview.rows": "Rye",
      "overview.columns": "Kolomme",
      "overview.numeric": "Numeriese kolomme",
      "overview.missing": "Ontbrekende waardes",

      "preview.title": "Data-voorskou",

      "charts.title": "Visualiserings",
      "charts.generate": "Genereer grafiek",
      "charts.bar": "Staafgrafiek",
      "charts.line": "Lyngrafiek",
      "charts.pie": "Sirkelgrafiek",
      "charts.doughnut": "Donutgrafiek",

      "insights.title": "Sleutelinsigte",

      "footer.text": "InsightForge • Gebou met deursigtigheid",
      "lang.label": "Taal"
    },

    // ===================== CATALAN =====================
    ca: {
      "app.title": "InsightForge",
      "app.tagline": "Converteix dades en brut en decisions",

      "upload.title": "Carregar conjunt de dades",
      "upload.subtitle": "Carregueu un fitxer CSV per començar l'anàlisi",
      "upload.loading": "Carregant",
      "upload.loaded": "Carregat",
      "upload.error": "Error",

      "overview.title": "Resum del conjunt de dades",
      "overview.rows": "Files",
      "overview.columns": "Columnes",
      "overview.numeric": "Columnes numèriques",
      "overview.missing": "Valors que falten",

      "preview.title": "Vista prèvia de dades",

      "charts.title": "Visualitzacions",
      "charts.generate": "Generar gràfic",
      "charts.bar": "Gràfic de barres",
      "charts.line": "Gràfic de línies",
      "charts.pie": "Gràfic circular",
      "charts.doughnut": "Gràfic de rosquilla",

      "insights.title": "Idees clau",

      "footer.text": "InsightForge • Creat amb transparència",
      "lang.label": "Idioma"
    },

    // ===================== ALBANIAN =====================
    sq: {
      "app.title": "InsightForge",
      "app.tagline": "Ktheni të dhënat e papërpunuara në vendime",

      "upload.title": "Ngarko grupin e të dhënave",
      "upload.subtitle": "Ngarkoni një skedar CSV për të filluar analizën",
      "upload.loading": "Duke u ngarkuar",
      "upload.loaded": "U ngarkua",
      "upload.error": "Gabim",

      "overview.title": "Përmbledhje e grupit të të dhënave",
      "overview.rows": "Rreshtat",
      "overview.columns": "Kolonat",
      "overview.numeric": "Kolonat numerike",
      "overview.missing": "Vlerat që mungojnë",

      "preview.title": "Parapamja e të dhënave",

      "charts.title": "Vizualizimet",
      "charts.generate": "Gjenero diagramin",
      "charts.bar": "Diagrami me shirita",
      "charts.line": "Diagrami me vija",
      "charts.pie": "Diagrami rrethor",
      "charts.doughnut": "Diagrami unazor",

      "insights.title": "Vëzhgimet kryesore",

      "footer.text": "InsightForge • Ndërtuar me transparencë",
      "lang.label": "Gjuha"
    },

    // ===================== MACEDONIAN =====================
    mk: {
      "app.title": "InsightForge",
      "app.tagline": "Претворете ги суровите податоци во одлуки",

      "upload.title": "Прикачи збир на податоци",
      "upload.subtitle": "Прикачете CSV датотека за да започнете со анализа",
      "upload.loading": "Се вчитува",
      "upload.loaded": "Вчитано",
      "upload.error": "Грешка",

      "overview.title": "Преглед на збирот на податоци",
      "overview.rows": "Редови",
      "overview.columns": "Колони",
      "overview.numeric": "Нумерички колони",
      "overview.missing": "Недостасувачки вредности",

      "preview.title": "Преглед на податоци",

      "charts.title": "Визуелизации",
      "charts.generate": "Генерирај графикон",
      "charts.bar": "Столбест графикон",
      "charts.line": "Линиски графикон",
      "charts.pie": "Кружен графикон",
      "charts.doughnut": "Прстенест графикон",

      "insights.title": "Клучни сознанија",

      "footer.text": "InsightForge • Изградено со транспарентност",
      "lang.label": "Јазик"
}
// ===================== GEORGIAN =====================
    ka: {
      "app.title": "InsightForge",
      "app.tagline": "ნედლი მონაცემები გადააქციე გადაწყვეტილებებად",

      "upload.title": "მონაცემთა ნაკრების ატვირთვა",
      "upload.subtitle": "ატვირთეთ CSV ფაილი ანალიზის დასაწყებად",
      "upload.loading": "იტვირთება",
      "upload.loaded": "ატვირთულია",
      "upload.error": "შეცდომა",

      "overview.title": "მონაცემთა ნაკრების მიმოხილვა",
      "overview.rows": "რიგები",
      "overview.columns": "სვეტები",
      "overview.numeric": "რიცხვითი სვეტები",
      "overview.missing": "დაკარგული მნიშვნელობები",

      "preview.title": "მონაცემების გადახედვა",

      "charts.title": "ვიზუალიზაციები",
      "charts.generate": "დიაგრამის შექმნა",
      "charts.bar": "სვეტოვანი დიაგრამა",
      "charts.line": "ხაზოვანი დიაგრამა",
      "charts.pie": "წრიული დიაგრამა",
      "charts.doughnut": "რგოლისებრი დიაგრამა",

      "insights.title": "ძირითადი ინსაიტები",

      "footer.text": "InsightForge • შექმნილია გამჭვირვალობით",
      "lang.label": "ენა"
    },

    // ===================== ARMENIAN =====================
    hy: {
      "app.title": "InsightForge",
      "app.tagline": "Հում տվյալները վերածեք որոշումների",

      "upload.title": "Վերբեռնել տվյալների հավաքածու",
      "upload.subtitle": "Վերբեռնեք CSV ֆայլ՝ վերլուծությունը սկսելու համար",
      "upload.loading": "Բեռնվում է",
      "upload.loaded": "Բեռնված է",
      "upload.error": "Սխալ",

      "overview.title": "Տվյալների հավաքածուի ակնարկ",
      "overview.rows": "Տողեր",
      "overview.columns": "Սյունակներ",
      "overview.numeric": "Թվային սյունակներ",
      "overview.missing": "Բացակայող արժեքներ",

      "preview.title": "Տվյալների նախադիտում",

      "charts.title": "Վիզուալիզացիաներ",
      "charts.generate": "Ստեղծել գրաֆիկ",
      "charts.bar": "Սյունակային գրաֆիկ",
      "charts.line": "Գծային գրաֆիկ",
      "charts.pie": "Շրջանաձև գրաֆիկ",
      "charts.doughnut": "Օղակաձև գրաֆիկ",

      "insights.title": "Հիմնական պատկերացումներ",

      "footer.text": "InsightForge • Կառուցված թափանցիկությամբ",
      "lang.label": "Լեզու"
    },

    // ===================== ICELANDIC =====================
    is: {
      "app.title": "InsightForge",
      "app.tagline": "Breyttu hráum gögnum í ákvarðanir",

      "upload.title": "Hlaða upp gagnasafni",
      "upload.subtitle": "Hladdu upp CSV-skrá til að byrja greininguna",
      "upload.loading": "Hleður",
      "upload.loaded": "Hlaðið",
      "upload.error": "Villa",

      "overview.title": "Yfirlit yfir gagnasafn",
      "overview.rows": "Raðir",
      "overview.columns": "Dálkar",
      "overview.numeric": "Tölulegir dálkar",
      "overview.missing": "Vantar gildi",

      "preview.title": "Forskoðun gagna",

      "charts.title": "Myndræn framsetning",
      "charts.generate": "Búa til graf",
      "charts.bar": "Súlurit",
      "charts.line": "Línurit",
      "charts.pie": "Kökurit",
      "charts.doughnut": "Kleinuhringrit",

      "insights.title": "Lykilinnsýn",

      "footer.text": "InsightForge • Byggt með gagnsæi",
      "lang.label": "Tungumál"
    },

    // ===================== BASQUE =====================
    eu: {
      "app.title": "InsightForge",
      "app.tagline": "Bihurtu datu gordinak erabaki bihurtu",

      "upload.title": "Kargatu datu-multzoa",
      "upload.subtitle": "Kargatu CSV fitxategi bat analisia hasteko",
      "upload.loading": "Kargatzen",
      "upload.loaded": "Kargatuta",
      "upload.error": "Errorea",

      "overview.title": "Datu-multzoaren ikuspegi orokorra",
      "overview.rows": "Errenkadak",
      "overview.columns": "Zutabeak",
      "overview.numeric": "Zutabe numerikoak",
      "overview.missing": "Falta diren balioak",

      "preview.title": "Datuen aurrebista",

      "charts.title": "Bistaratzeak",
      "charts.generate": "Sortu grafikoa",
      "charts.bar": "Barra-grafikoa",
      "charts.line": "Lerro-grafikoa",
      "charts.pie": "Tarta-grafikoa",
      "charts.doughnut": "Donut-grafikoa",

      "insights.title": "Funtsezko ikuspegiak",

      "footer.text": "InsightForge • Gardentasunez eraikia",
      "lang.label": "Hizkuntza"
    },

    // ===================== GALICIAN =====================
    gl: {
      "app.title": "InsightForge",
      "app.tagline": "Converte datos en bruto en decisións",

      "upload.title": "Cargar conxunto de datos",
      "upload.subtitle": "Carga un ficheiro CSV para comezar a análise",
      "upload.loading": "Cargando",
      "upload.loaded": "Cargado",
      "upload.error": "Erro",

      "overview.title": "Resumo do conxunto de datos",
      "overview.rows": "Filas",
      "overview.columns": "Columnas",
      "overview.numeric": "Columnas numéricas",
      "overview.missing": "Valores que faltan",

      "preview.title": "Vista previa dos datos",

      "charts.title": "Visualizacións",
      "charts.generate": "Xerar gráfico",
      "charts.bar": "Gráfico de barras",
      "charts.line": "Gráfico de liñas",
      "charts.pie": "Gráfico circular",
      "charts.doughnut": "Gráfico de rosca",

      "insights.title": "Ideas clave",

      "footer.text": "InsightForge • Construído con transparencia",
      "lang.label": "Idioma"
    },

    // ===================== BELARUSIAN =====================
    be: {
      "app.title": "InsightForge",
      "app.tagline": "Пераўтварыце сырыя даныя ў рашэнні",

      "upload.title": "Загрузіць набор даных",
      "upload.subtitle": "Загрузіце CSV-файл, каб пачаць аналіз",
      "upload.loading": "Загрузка",
      "upload.loaded": "Загружана",
      "upload.error": "Памылка",

      "overview.title": "Агляд набору даных",
      "overview.rows": "Радкі",
      "overview.columns": "Слупкі",
      "overview.numeric": "Лікавыя слупкі",
      "overview.missing": "Адсутныя значэнні",

      "preview.title": "Папярэдні прагляд даных",

      "charts.title": "Візуалізацыі",
      "charts.generate": "Стварыць дыяграму",
      "charts.bar": "Слупковая дыяграма",
      "charts.line": "Лінейны графік",
      "charts.pie": "Кругавая дыяграма",
      "charts.doughnut": "Кальцавая дыяграма",

      "insights.title": "Ключавыя высновы",

      "footer.text": "InsightForge • Створана з празрыстасцю",
      "lang.label": "Мова"
    },

    // ===================== KAZAKH =====================
    kk: {
      "app.title": "InsightForge",
      "app.tagline": "Шикі деректерді шешімдерге айналдырыңыз",

      "upload.title": "Деректер жинағын жүктеу",
      "upload.subtitle": "Талдауды бастау үшін CSV файлын жүктеңіз",
      "upload.loading": "Жүктелуде",
      "upload.loaded": "Жүктелді",
      "upload.error": "Қате",

      "overview.title": "Деректер жинағына шолу",
      "overview.rows": "Жолдар",
      "overview.columns": "Бағандар",
      "overview.numeric": "Сандық бағандар",
      "overview.missing": "Жоқ мәндер",

      "preview.title": "Деректерді алдын ала қарау",

      "charts.title": "Көрнекілендірулер",
      "charts.generate": "Диаграмма жасау",
      "charts.bar": "Бағандық диаграмма",
      "charts.line": "Сызықтық график",
      "charts.pie": "Дөңгелек диаграмма",
      "charts.doughnut": "Сақиналы диаграмма",

      "insights.title": "Негізгі түсініктер",

      "footer.text": "InsightForge • Ашықтықпен жасалған",
      "lang.label": "Тіл"
    },

    // ===================== AZERBAIJANI =====================
    az: {
      "app.title": "InsightForge",
      "app.tagline": "Xam məlumatları qərarlara çevirin",

      "upload.title": "Məlumat dəstini yüklə",
      "upload.subtitle": "Analizi başlamaq üçün CSV faylı yükləyin",
      "upload.loading": "Yüklənir",
      "upload.loaded": "Yükləndi",
      "upload.error": "Xəta",

      "overview.title": "Məlumat dəstinə baxış",
      "overview.rows": "Sətirlər",
      "overview.columns": "Sütunlar",
      "overview.numeric": "Rəqəmsal sütunlar",
      "overview.missing": "Çatışmayan dəyərlər",

      "preview.title": "Məlumatlara ön baxış",

      "charts.title": "Vizualizasiyalar",
      "charts.generate": "Qrafik yarat",
      "charts.bar": "Sütun diaqramı",
      "charts.line": "Xətt diaqramı",
      "charts.pie": "Dairəvi diaqram",
      "charts.doughnut": "Halqa diaqramı",

      "insights.title": "Əsas anlayışlar",

      "footer.text": "InsightForge • Şəffaflıqla qurulub",
      "lang.label": "Dil"
    },

    // ===================== MONGOLIAN =====================
    mn: {
      "app.title": "InsightForge",
      "app.tagline": "Түүхий өгөгдлийг шийдвэр болгон хувирга",

      "upload.title": "Өгөгдлийн багц байршуулах",
      "upload.subtitle": "Шинжилгээг эхлүүлэхийн тулд CSV файл байршуулна уу",
      "upload.loading": "Ачаалж байна",
      "upload.loaded": "Ачаалагдсан",
      "upload.error": "Алдаа",

      "overview.title": "Өгөгдлийн багцын тойм",
      "overview.rows": "Мөрүүд",
      "overview.columns": "Баганууд",
      "overview.numeric": "Тоон баганууд",
      "overview.missing": "Дутуу утгууд",

      "preview.title": "Өгөгдлийн урьдчилсан харагдац",

      "charts.title": "Дүрслэлүүд",
      "charts.generate": "График үүсгэх",
      "charts.bar": "Баганан график",
      "charts.line": "Шугаман график",
      "charts.pie": "Дугуй график",
      "charts.doughnut": "Цагираган график",

      "insights.title": "Гол ойлголтууд",

      "footer.text": "InsightForge • Ил тод байдлаар бүтээгдсэн",
      "lang.label": "Хэл"
}
