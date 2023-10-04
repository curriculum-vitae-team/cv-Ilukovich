import { colors, createTheme } from '@mui/material'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: colors.red[700],
      dark: colors.red[800]
    }
  }
})
