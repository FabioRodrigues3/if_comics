import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Home } from '../pages/Home'
import { Login } from '../components/Login'
import { ProtectedLayout } from '../layout/ProtectedLayout'
import { ComicRegistration } from '../pages/ComicRegistration'
import { ComicChapters } from '../pages/ComicChapters'
import { Reader } from '../pages/Reader'
import { ChapterRegistration } from '../pages/ChapterRegistration'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/admin" element={<ProtectedLayout />}>
            <Route path="/admin/new-series" element={<ComicRegistration />} />
            <Route
              path="/admin/:id/new-chapter"
              element={<ChapterRegistration />}
            />
          </Route>
          <Route path="/">
            <Route path="/comic/:id" element={<ComicChapters />} />
            <Route path="/reader/:id" element={<Reader />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
