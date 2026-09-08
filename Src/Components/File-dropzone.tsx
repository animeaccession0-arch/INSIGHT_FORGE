import React, { useRef, useState } from 'react'

interface FileDropzoneProps {
  onFileSelect: (file: File) => void
  accept?: string
  label?: string
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  onFileSelect,
  accept = '.csv',
  label = 'Drag & drop your CSV file here'
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = (file: File) => {
    onFileSelect(file)
  }

  return (
    <div
      className={`dropzone ${isDragging ? 'dragging' : ''}`}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault()
        setIsDragging(false)
        const file = e.dataTransfer.files[0]
        if (file) handleFile(file)
      }}
      onClick={() => inputRef.current?.click()}
    >
      <div className="dropzone-content">
        <div className="dropzone-icon">📁</div>
        <p>{label}</p>
        <p className="dropzone-or">or</p>
        <button type="button" className="primary-btn">
          Browse Files
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
        }}
      />
    </div>
  )
}

export default FileDropzone
