import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import { Home } from '../pages/Home'
import { Login } from '../components/Login'
import { ProtectedLayout } from '../layout/ProtectedLayout'
import { ComicRegistration } from '../pages/ComicRegistration'
import { ComicChapters } from '../pages/ComicChapters'
import { Reader } from '../pages/Reader'
import { ChapterRegistration } from '../pages/ChapterRegistration'
import { TestForm } from '../pages/TestForm'

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
            <Route
              path="/reader/:comicId/:id/:chapterNumber"
              element={<Reader />}
            />
          </Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/test" element={<TestForm />} />
      </Routes>
    </BrowserRouter>
  )
}
