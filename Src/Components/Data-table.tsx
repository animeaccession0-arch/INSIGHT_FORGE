import React from 'react'

interface DataTableProps {
  data: any[]
  headers: string[]
  maxRows?: number
}

const DataTable: React.FC<DataTableProps> = ({ data, headers, maxRows = 10 }) => {
  if (!data || data.length === 0) {
    return (
      <div className="empty-state small">
        <p>No data to display</p>
      </div>
    )
  }

  const rowsToShow = data.slice(0, maxRows)

  return (
    <div className="data-table-wrapper">
      <div className="table-info">
        Showing {rowsToShow.length} of {data.length} rows
      </div>
      
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsToShow.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header) => (
                  <td key={header}>
                    {row[header] !== null && row[header] !== undefined && row[header] !== ''
                      ? String(row[header])
                      : '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable
