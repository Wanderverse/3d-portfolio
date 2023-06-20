'use client'

import { useState } from 'react'
import Icon from '@/components/dom/Icon'
import { pdfjs, Document, Page } from 'react-pdf'
import { useMediaQuery } from 'react-responsive'

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString()

const Resume = ({}) => {
  const [numPages, setNumPages] = useState(null)
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  return (
    <div className='relative border-b border-n-6 z-20'>
      <div className=' flex flex-col  h-18 bg-transparent border-none outline-none h5 text-n-4 placeholder:text-n-4/50  fill-n-4 justify-center  '>
        <a className='text-center' href='/resume.pdf' download='Resume.pdf'>
          <button className='group outline-none' type='submit'>
            <Icon className='w-10 h-10 pb-2 fill-n-4 transition-colors group-hover:fill-n-1' name='share' />
            <span className=' ml-5 transition-colors group-hover:text-n-1  '>Export as PDF</span>
          </button>
        </a>
      </div>
      <Document file={'/resume.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} scale={isMobile ? 1 : 1.2} />
        ))}
      </Document>
    </div>
  )
}

export default Resume
