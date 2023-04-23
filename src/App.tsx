import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './contexts/auth'
import { SeriesProvider } from './contexts/series'
import { AppRoutes } from './routes/routes'
import { GlobalStyle } from './styles/global'
import theme from './styles/variables'
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <SeriesProvider>
            <AppRoutes />
          </SeriesProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
