import { Theme } from '@mui/material/styles'

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

declare module '@mui/material/styles' {
  interface Theme {
    name: 'main' | 'neutron' | 'admin'
    customVars?: {
      borderRadius: string
      colors: {
        grey100: string
        grey250: string
      }
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    name?: 'main' | 'neutron' | 'admin'
    customVars?: {
      borderRadius?: string
      colors?: {
        grey100?: string
        grey250?: string
      }
    }
  }
}
