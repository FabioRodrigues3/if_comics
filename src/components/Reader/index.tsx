
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import { useState, useRef } from 'react'
export function ReaderComponent() {
  const [numPages, setNumPages] = useState()
  const [page, setPage] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
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

  function changePage(offset) {
    setPage(prev => prev + offset)
  }


  return (
    <div>
      {page} de {numPages}
      <button onClick={BackPage}> volta </button>
      <button onClick={NextPage}> vai </button>

      <Document ref={useReffing} file="/manwha.pdf" onLoadSuccess={onDocumentLoadSuccess} >
        <Page height={1000} pageNumber={page} />
      </Document>
    </div>
  )
}
