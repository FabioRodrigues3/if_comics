import { ReaderComponent } from '../../components/Reader'
import { useCallback, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useChapters } from '../../hooks/useChapters'
import { ChapterControl, Container } from './styles'
import { GetChapterByIdProps } from '../../services/getChapters'
import { useForm } from 'react-hook-form'
export function Reader() {
  const { id, comicId } = useParams()
  const { chapter, chapters } = useChapters({ id, comicId })
  const { register, watch } = useForm()
  const selectRef = useRef(null)
  const navigate = useNavigate()

  const chapterPagination = chapters.sort(
    (a, b) => a.chapterNumber - b.chapterNumber,
  )

  const actualChapter = chapterPagination.find(
    (item) => item.chapterNumber === chapter.chapterNumber,
  )

  const chapterPosition = chapterPagination.findIndex(
    (x) => x.chapterNumber === actualChapter?.chapterNumber,
  )

  const chaptersWithoutCurrent = chapterPagination.filter(
    (item) => item.chapterNumber !== actualChapter?.chapterNumber,
  )

  const NextChapter = useCallback(() => {
    navigate(
      `/reader/${comicId}/${chapterPagination[chapterPosition + 1]?.id}/`,
    )
    window.location.reload()
  }, [chapterPagination, chapterPosition, comicId, navigate])

  const PreviousChapter = useCallback(() => {
    navigate(`/reader/${comicId}/${chapterPagination[chapterPosition - 1]?.id}`)
    window.location.reload()
  }, [chapterPagination, chapterPosition, comicId, navigate])

  const onSelect = (chapter: GetChapterByIdProps) => {
    navigate(`/reader/${comicId}/${chapter.id}/`)
    window.location.reload()
  }

  return (
    <Container>
      <ChapterControl>
        <button
          disabled={chapterPosition === 0}
          type="button"
          onClick={PreviousChapter}
        >
          Capítulo anterior
        </button>

        <select onChange={(e) => onSelect({ id: e.target.value })}>
          <option>#{actualChapter?.chapterNumber}</option>
          {chaptersWithoutCurrent.map((item) => (
            <option value={item.id} key={item.chapterNumber}>
              <Link to={`/reader/${comicId}/${item.id}/`}>
                #{item.chapterNumber}
              </Link>
            </option>
          ))}
        </select>

        <button
          type="button"
          disabled={chapterPosition === chapters.length - 1}
          onClick={NextChapter}
        >
          Próximo capítulo
        </button>
      </ChapterControl>
      <div>
        <h1>
          #{actualChapter?.chapterNumber} - {actualChapter?.chapterTitle}
        </h1>
      </div>
      <ReaderComponent content={actualChapter?.fileUrl} />
    </Container>
  )
}
