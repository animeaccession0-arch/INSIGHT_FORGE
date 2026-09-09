export interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
}

export interface UserSettings {
  language: string
  theme: 'dark' | 'light'
}
