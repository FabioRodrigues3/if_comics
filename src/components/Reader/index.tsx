import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { useState, useRef } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { BufferSource } from 'stream/web'
export function ReaderComponent({ content }: { content: Buffer }) {
  const [numPages, setNumPages] = useState(0)
  const [page, setPage] = useState(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setPage(1)
  }
  const useReffing = useRef(null)

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
    <div>
      {page} de {numPages}
      <button onClick={BackPage}>
        {' '}
        <CaretLeft />{' '}
      </button>
      <button onClick={NextPage}>
        {' '}
        <CaretRight />{' '}
      </button>
      <Document
        ref={useReffing}
        file={content}
        onLoadSuccess={(pdf) => onDocumentLoadSuccess(pdf)}
      >
        <Page height={1000} pageNumber={page} />
      </Document>
    </div>
  )
}
