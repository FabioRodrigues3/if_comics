import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { useState, useCallback } from 'react'
import { CaretLeft, CaretRight, MaskSad, SmileySad } from 'phosphor-react'
import { Container, Controllers, ReloadScreen } from './styles'
import { LoadingElement } from '../LoadingElement'

type ReaderComponentProps = {
  content: Buffer
}

export function ReaderComponent({ content }: ReaderComponentProps) {
  const [numPages, setNumPages] = useState(0)
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPage(1)
    setLoading(false)
  }

  function BackPage() {
    changePage(-1)
  }

  const NextPage = useCallback(() => {
    changePage(+1)
  }, [])

  function changePage(offset: number) {
    setPage((prev) => prev + offset)
  }

  return (
    <Container>
      {loading && <LoadingElement isFullScreen={true} />}
      <Controllers>
        <div>
          <button disabled={page === 1} onClick={BackPage}>
            <CaretLeft />
          </button>
          {page} de {numPages}
          <button disabled={page === numPages} onClick={NextPage}>
            <CaretRight />
          </button>
        </div>
      </Controllers>
      <Document file={content} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          onLoadError={() => setError(true)}
          renderTextLayer={false}
          onRenderError={() => {
            setError(true)
            setLoading(false)
          }}
          renderAnnotationLayer={false}
          height={1500}
          pageNumber={page}
        />

        {error && (
          <ReloadScreen>
            <SmileySad size={55} />

            <h2>
              Não foi possível realizar o carregamento
              <br /> Por favor, atualize a página e tente novamente.
            </h2>
          </ReloadScreen>
        )}
      </Document>
    </Container>
  )
}
