import Papa from 'papaparse'
import { DataRow } from '../types/data'

export interface ParseResult {
  data: DataRow[]
  headers: string[]
  errors: string[]
}

export function parseCSV(file: File): Promise<ParseResult> {
  return new Promise((resolve) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results) => {
        const headers = results.meta.fields || []
        const data = results.data as DataRow[]
        const errors = results.errors.map(e => e.message)

        resolve({
          data,
          headers,
          errors
        })
      },
      error: (error) => {
        resolve({
          data: [],
          headers: [],
          errors: [error.message]
        })
      }
    })
  })
}
