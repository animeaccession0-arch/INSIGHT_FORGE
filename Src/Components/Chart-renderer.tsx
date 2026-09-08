import React from 'react'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

interface ChartRendererProps {
  data: any[]
  column: string
  chartType: 'bar' | 'line' | 'pie' | 'doughnut'
}

const COLORS = ['#38bdf8', '#818cf8', '#34d399', '#fbbf24', '#f87171', '#a78bfa', '#2dd4bf']

const ChartRenderer: React.FC<ChartRendererProps> = ({ data, column, chartType }) => {
  if (!data || data.length === 0 || !column) {
    return (
      <div className="empty-state small">
        <p>No data available for chart</p>
      </div>
    )
  }

  // Prepare data for charts
  const chartData = data
    .map((row, index) => ({
      name: String(index + 1),
      value: typeof row[column] === 'number' ? row[column] : 0
    }))
    .filter(item => !isNaN(item.value))

  if (chartData.length === 0) {
    return (
      <div className="empty-state small">
        <p>Selected column has no numeric data</p>
      </div>
    )
  }

  // For pie/doughnut we limit the number of slices for readability
  const pieData = chartData.slice(0, 12)

  return (
    <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height={360}>
        {chartType === 'bar' && (
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip
              contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            />
            <Bar dataKey="value" fill="#38bdf8" radius={[4, 4, 0, 0]} />
          </BarChart>
        )}

        {chartType === 'line' && (
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip
              contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            />
            <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={2} dot={false} />
          </LineChart>
        )}

        {(chartType === 'pie' || chartType === 'doughnut') && (
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={130}
              innerRadius={chartType === 'doughnut' ? 70 : 0}
              label={({ name, percent }) => `\( {name} ( \){(percent * 100).toFixed(0)}%)`}
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
            />
            <Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  )
}

export default ChartRenderer
