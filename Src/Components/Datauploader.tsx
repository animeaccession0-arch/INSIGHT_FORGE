import React, { useRef, useState } from 'react'

interface DataUploaderProps {
  onFileLoaded: (data: any[], headers: string[], fileName: string) => void
}

const DataUploader: React.FC<DataUploaderProps> = ({ onFileLoaded }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [status, setStatus] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleFile = (file: File) => {
    if (!file.name.endsWith('.csv')) {
      setError('Please upload a CSV file only.')
      return
    }

    setStatus(`Loading: ${file.name}...`)
    setError('')

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string
        // Simple CSV parsing (we will improve this later with PapaParse)
        const lines = text.trim().split('\n')
        const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
        
        const data = lines.slice(1).map(line => {
          const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''))
          const row: any = {}
          headers.forEach((header, index) => {
            const value = values[index]
            // Try to convert to number if possible
            row[header] = isNaN(Number(value)) || value === '' ? value : Number(value)
          })
          return row
        })

        onFileLoaded(data, headers, file.name)
        setStatus(`Loaded: ${file.name}`)
      } catch (err) {
        setError('Failed to parse the CSV file.')
        setStatus('')
      }
    }

    reader.onerror = () => {
      setError('Error reading the file.')
      setStatus('')
    }

    reader.readAsText(file)
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const onDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="data-uploader">
      <h2 className="page-title">Upload Dataset</h2>
      <p className="subtitle">Upload a CSV file to begin analysis</p>

      <div
        className={`dropzone ${isDragging ? 'dragging' : ''}`}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="dropzone-content">
          <div className="dropzone-icon">📁</div>
          <p>Drag & drop your CSV file here</p>
          <p className="dropzone-or">or</p>
          <button className="primary-btn" type="button">
            Browse Files
          </button>
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
        }}
      />

      {status && <p className="status-text success">{status}</p>}
      {error && <p className="status-text error">{error}</p>}
    </div>
  )
}

export default DataUploader
