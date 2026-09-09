import React, { useMemo } from 'react'
import { DataRow } from '../../types/data'

interface ProductPanelProps {
  data: DataRow[]
  headers: string[]
}

const ProductPanel: React.FC<ProductPanelProps> = ({ data, headers }) => {
  const analysis = useMemo(() => {
    if (!data.length) return null

    const lower = headers.map(h => h.toLowerCase())
    const productCol = headers.find((_, i) => /product|item|name|sku/.test(lower[i]))
    const unitsCol = headers.find((_, i) => /unit|qty|quantity|sold/.test(lower[i]))
    const revenueCol = headers.find((_, i) => /revenue|sales|amount|price/.test(lower[i]))

    if (!productCol) {
      return { error: 'No clear product column detected.' }
    }

    const map: Record<string, { units: number; revenue: number; count: number }> = {}

    data.forEach(row => {
      const name = String(row[productCol] ?? 'Unknown')
      if (!map[name]) map[name] = { units: 0, revenue: 0, count: 0 }
      map[name].count += 1
      if (unitsCol && typeof row[unitsCol] === 'number') map[name].units += row[unitsCol] as number
      if (revenueCol && typeof row[revenueCol] === 'number') map[name].revenue += row[revenueCol] as number
    })

    const products = Object.entries(map)
      .map(([name, stats]) => ({ name, ...stats }))
      .sort((a, b) => b.revenue - a.revenue)

    return { products, top: products[0], productCol, unitsCol, revenueCol }
  }, [data, headers])

  if (!data.length) {
    return <p className="subtitle">Upload data to use Product Inspection.</p>
  }

  if (!analysis || 'error' in analysis) {
    return <p className="subtitle">{analysis?.error || 'Unable to analyze products.'}</p>
  }

  return (
    <div className="product-panel">
      <h2 className="page-title">📦 Product Inspection</h2>
      <p className="subtitle">Product performance analysis</p>

      {analysis.top && (
        <div className="card">
          <strong>Top Product:</strong> {analysis.top.name}
          {analysis.top.revenue > 0 && (
            <span> — Revenue: {analysis.top.revenue.toFixed(2)}</span>
          )}
        </div>
      )}

      <div className="table-scroll" style={{ marginTop: '16px' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Count</th>
              <th>Units</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {analysis.products.slice(0, 15).map((p) => (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td>{p.count}</td>
                <td>{p.units}</td>
                <td>{p.revenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductPanel
