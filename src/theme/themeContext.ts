import { createContext } from 'react'
import { ThemeType } from './types'

interface ThemeContextProps {
  theme: ThemeType
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)