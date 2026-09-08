import { useState, useCallback } from 'react'
import { DataRow } from '../types/data'
import { loadCSVFile } from '../services/fileService'

export function useData() {
  const [data, setData] = useState<DataRow[]>([])
  const [headers, setHeaders] = useState<string[]>([])
  const [fileName, setFileName] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadFile = useCallback(async (file: File) => {
    setIsLoading(true)
    setError(null)

    const result = await loadCSVFile(file)

    if (result.error) {
      setError(result.error)
      setData([])
      setHeaders([])
      setFileName('')
    } else {
      setData(result.data)
      setHeaders(result.headers)
      setFileName(result.fileName)
    }

    setIsLoading(false)
  }, [])

  const clearData = useCallback(() => {
    setData([])
    setHeaders([])
    setFileName('')
    setError(null)
  }, [])

  return {
    data,
    headers,
    fileName,
    isLoading,
    error,
    hasData: data.length > 0,
    loadFile,
    clearData
  }
}
