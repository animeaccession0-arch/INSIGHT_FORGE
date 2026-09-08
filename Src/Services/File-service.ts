import { parseCSV, ParseResult } from '../lib/csvParser'
import { DataRow } from '../types/data'

export async function loadCSVFile(file: File): Promise<{
  data: DataRow[]
  headers: string[]
  fileName: string
  error?: string
}> {
  if (!file.name.toLowerCase().endsWith('.csv')) {
    return {
      data: [],
      headers: [],
      fileName: file.name,
      error: 'Please upload a CSV file only.'
    }
  }

  const result: ParseResult = await parseCSV(file)

  if (result.errors.length > 0) {
    return {
      data: [],
      headers: [],
      fileName: file.name,
      error: result.errors[0]
    }
  }

  return {
    data: result.data,
    headers: result.headers,
    fileName: file.name
  }
}
