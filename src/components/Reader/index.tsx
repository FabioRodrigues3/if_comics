import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { useState } from 'react'
import { CaretLeft, CaretRight, MaskSad, SmileySad } from 'phosphor-react'
import { Container, Controllers, ReloadScreen } from './styles'
import { LoadingElement } from '../LoadingElement'
export function ReaderComponent({ content }: { content: Buffer }) {
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

  function NextPage() {
    changePage(+1)
  }

  function changePage(offset: number) {
    setPage((prev) => prev + offset)
  }

  return (
    <Container>
      {loading && <LoadingElement isFullScreen={true} />}

      <Controllers>
        <button disabled={page === 1} onClick={BackPage}>
          <CaretLeft />
        </button>
        {page} de {numPages}
        <button disabled={page === numPages} onClick={NextPage}>
          <CaretRight />
        </button>
      </Controllers>
      <Document file={content} onLoadSuccess={onDocumentLoadSuccess}>
        <Page
          onLoadError={() => setError(true)}
          renderTextLayer={false}
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
