'use client'
import { useRef, useState, useEffect, useMemo, Suspense } from 'react'
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
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex h-96 w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
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
            overflow: 'hidden',
            // borderRadius: '70px',
          }}
        />
        <View
          camera={{ position: [0, 5, 18], fov: 15, near: 1, far: 50 }}
          className='flex h-full w-full flex-col items-center justify-center'
        >
          <Suspense fallback={<div>loading...</div>}>
            <CameraScreen portal={domContent} />
          </Suspense>
        </View>
      </div>
    </PageLayout>
  )
}

export default Main
