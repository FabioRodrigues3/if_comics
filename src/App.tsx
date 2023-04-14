import { AuthProvider } from './contexts/auth'
import { SeriesProvider } from './contexts/series'
import { AppRoutes } from './routes/routes'
import { GlobalStyle } from './styles/global'
import 'rsuite/dist/rsuite.min.css'

function App() {
  return (
    <div>
      <GlobalStyle />
      <AuthProvider>
        <SeriesProvider>
          <AppRoutes />
        </SeriesProvider>
      </AuthProvider>
    </div>
  )
}

export default App
