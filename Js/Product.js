/**
 * InsightForge - Product Inspection Module
 * Analyzes product performance from sales-like datasets
 */

const ProductModule = (() => {

  /**
   * Detect possible product-related columns
   */
  function detectProductColumns(headers) {
    const lower = headers.map(h => h.toLowerCase());
    return {
      product: headers.find((_, i) => /product|item|name|sku/i.test(lower[i])) || null,
      units: headers.find((_, i) => /unit|qty|quantity|sold/i.test(lower[i])) || null,
      revenue: headers.find((_, i) => /revenue|sales|amount|price/i.test(lower[i])) || null,
      cost: headers.find((_, i) => /cost|expense/i.test(lower[i])) || null,
      returns: headers.find((_, i) => /return|refund/i.test(lower[i])) || null
    };
  }

  /**
   * Generate product performance insights
   */
  function analyzeProducts() {
    const { data, headers } = DataModule.getData();
    if (!data || data.length === 0) return [];

    const cols = detectProductColumns(headers);
    const insights = [];

    if (!cols.product) {
      insights.push({
        type: "Heuristic",
        text: "No clear product column detected. Product analysis limited."
      });
      return insights;
    }

    // Group by product
    const productMap = {};

    data.forEach(row => {
      const name = row[cols.product];
      if (!name) return;

      if (!productMap[name]) {
        productMap[name] = {
          units: 0,
          revenue: 0,
          cost: 0,
          returns: 0,
          count: 0
        };
      }

      productMap[name].count += 1;
      if (cols.units && typeof row[cols.units] === "number") {
        productMap[name].units += row[cols.units];
      }
      if (cols.revenue && typeof row[cols.revenue] === "number") {
        productMap[name].revenue += row[cols.revenue];
      }
      if (cols.cost && typeof row[cols.cost] === "number") {
        productMap[name].cost += row[cols.cost];
      }
      if (cols.returns && typeof row[cols.returns] === "number") {
        productMap[name].returns += row[cols.returns];
      }
    });

    const products = Object.entries(productMap).map(([name, stats]) => ({
      name,
      ...stats,
      profit: stats.revenue - stats.cost,
      margin: stats.revenue > 0 ? ((stats.revenue - stats.cost) / stats.revenue) * 100 : 0
    }));

    // Sort by revenue
    products.sort((a, b) => b.revenue - a.revenue);

    if (products.length > 0) {
      const top = products[0];
      insights.push({
        type: "Calculated",
        text: `Top product by revenue: ${top.name} (Revenue: ${top.revenue.toFixed(2)})`
      });
    }

    if (products.length > 1) {
      const worst = products[products.length - 1];
      insights.push({
        type: "Calculated",
        text: `Lowest revenue product: ${worst.name}`
      });
    }

    // High return rate detection
    products.forEach(p => {
      if (p.units > 0 && p.returns / p.units > 0.15) {
        insights.push({
          type: "Heuristic",
          text: `\( {p.name} has a high return rate ( \){((p.returns / p.units) * 100).toFixed(1)}%).`
        });
      }
    });

    return insights;
  }

  return {
    analyzeProducts,
    detectProductColumns
  };
})();
