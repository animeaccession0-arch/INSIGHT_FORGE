import { useState, useCallback } from 'react'
import { getItem, saveItem, removeItem } from '../services/storageService'

const ADMIN_PASSWORD = 'admin123' // Change this later

export function useAuth() {
  const [isAdmin, setIsAdmin] = useState(() => getItem('isAdmin', false))

  const login = useCallback((password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true)
      saveItem('isAdmin', true)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    setIsAdmin(false)
    removeItem('isAdmin')
  }, [])

  return {
    isAdmin,
    login,
    logout
  }
}
