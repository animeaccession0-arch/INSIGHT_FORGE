/**
 * InsightForge - Language Lab Module
 * Helps users learn the supported languages
 */

const LanguageLab = (() => {

  // Common phrases for learning
  const phrases = {
    en: {
      name: "English",
      greetings: ["Hello", "How are you?", "Thank you", "Goodbye"],
      data: ["Upload Dataset", "Key Insights", "Missing Values", "Generate Chart"]
    },
    hi: {
      name: "Hindi",
      greetings: ["नमस्ते", "आप कैसे हैं?", "धन्यवाद", "अलविदा"],
      data: ["डेटासेट अपलोड करें", "मुख्य अंतर्दृष्टि", "लापता मान", "चार्ट बनाएं"]
    },
    ja: {
      name: "Japanese",
      greetings: ["こんにちは", "お元気ですか？", "ありがとう", "さようなら"],
      data: ["データセットをアップロード", "主要なインサイト", "欠損値", "チャートを生成"]
    },
    es: {
      name: "Spanish",
      greetings: ["Hola", "¿Cómo estás?", "Gracias", "Adiós"],
      data: ["Subir conjunto de datos", "Ideas clave", "Valores faltantes", "Generar gráfico"]
    },
    fr: {
      name: "French",
      greetings: ["Bonjour", "Comment ça va ?", "Merci", "Au revoir"],
      data: ["Télécharger le jeu de données", "Principales insights", "Valeurs manquantes", "Générer le graphique"]
    },
    de: {
      name: "German",
      greetings: ["Hallo", "Wie geht es dir?", "Danke", "Auf Wiedersehen"],
      data: ["Datensatz hochladen", "Wichtige Erkenntnisse", "Fehlende Werte", "Diagramm erstellen"]
    },
    // You can keep adding more languages here later
  };

  function getSupportedLanguages() {
    return Object.keys(phrases);
  }

  function getLanguageData(langCode) {
    return phrases[langCode] || null;
  }

  function renderLanguageList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    getSupportedLanguages().forEach(code => {
      const lang = phrases[code];
      const btn = document.createElement("button");
      btn.className = "lang-lab-btn";
      btn.textContent = `\( {lang.name} ( \){code})`;
      btn.onclick = () => showLanguageDetails(code);
      container.appendChild(btn);
    });
  }

  function showLanguageDetails(langCode) {
    const data = getLanguageData(langCode);
    if (!data) return;

    const detailsBox = document.getElementById("langLabDetails");
    if (!detailsBox) return;

    detailsBox.innerHTML = `
      <h3>${data.name}</h3>
      
      <div class="phrase-section">
        <h4>Common Greetings</h4>
        <ul>
          \( {data.greetings.map(p => `<li> \){p}</li>`).join("")}
        </ul>
      </div>

      <div class="phrase-section">
        <h4>Data Related Words</h4>
        <ul>
          \( {data.data.map(p => `<li> \){p}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  return {
    renderLanguageList,
    showLanguageDetails,
    getSupportedLanguages
  };
})();
