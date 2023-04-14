import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Home } from '../pages/Home'
import { Login } from '../components/Login'
import { ProtectedLayout } from '../layout/ProtectedLayout'
import { ComicRegistration } from '../pages/ComicRegistration'
import { ComicChapters } from '../pages/ComicChapters'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/comic" element={<ProtectedLayout />}>
            <Route path="/comic/new-series" element={<ComicRegistration />} />

            <Route path="/comic/:id" element={<ComicChapters />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
