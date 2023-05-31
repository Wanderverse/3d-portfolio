'use client'
import { useRef, useState, useEffect, useMemo } from 'react'
import Message from '@/components/dom/Message'
import { Message as MessageType } from '@/types/chat'
import { fetchEventSource } from '@microsoft/fetch-event-source'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Document } from 'langchain/document'

import dynamic from 'next/dynamic'
const PageLayout = dynamic(() => import('@/components/dom/PageLayout').then((mod) => mod), { ssr: false })
const CameraScreen = dynamic(() => import('@/components/canvas/CameraScreen').then((mod) => mod.CameraScreen), {
  ssr: false,
})
type MainProps = {}

const Main = ({}: MainProps) => {
  const domContent = useRef()
  const containerRef = useRef()

  return (
    <PageLayout>
      <div ref={containerRef} className='content-container'>
        <div
          ref={domContent}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // overflow: 'hidden',
            // borderRadius: '70px',
          }}
        />
        <CameraScreen portal={domContent} />
      </div>
    </PageLayout>
  )
}

export default Main
