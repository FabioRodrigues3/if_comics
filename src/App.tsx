import { ThemeProvider } from 'styled-components'
import { SeriesProvider } from './contexts/series'
import { AppRoutes } from './routes/routes'
import { GlobalStyle } from './styles/global'
import theme from './styles/variables'
import { AuthProvider } from './contexts/auth'
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
