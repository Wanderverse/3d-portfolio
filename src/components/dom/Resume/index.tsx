'use client'

import { useState } from 'react'
import Icon from '@/components/dom/Icon'
import { pdfjs, Document, Page } from 'react-pdf'
import { useMediaQuery } from 'react-responsive'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString()

const Resume = () => {
  const [numPages, setNumPages] = useState(null)
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className='relative border-b border-n-3 dark:border-n-6 z-20'>
      <div className=' flex flex-col mw-full h-18 bg-transparent border-none outline-none h5 text-n-7 placeholder:text-n-4/50 dark:text-n-4 fill-n-4 justify-center '>
        <button className='group outline-none' type='submit'>
          <Icon
            className='w-8 h-8 fill-n-4/50 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-3'
            name='share'
          />
          <span className=' ml-3 transition-colors group-hover:text-n-1 dark:group-hover:text-n-1'>Export as PDF</span>
        </button>
      </div>
      <Document file={'/resume.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            className='m-3'
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={false}
            scale={isMobile ? 1 : 1.2}
          />
        ))}
      </Document>
    </div>
  )
}

export default Resume
// <form className='' action='' onSubmit={() => console.log('Submit')}>
