'use client'

import { OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { Suspense, useRef } from 'react'
// import { ChatBot } from '@/components/canvas/ChatBot'

const ChatBot = dynamic(() => import('@/components/canvas/ChatBot').then((mod) => mod.ChatBot), { ssr: false })

// const ChatBot = dynamic(() => import('@/components/canvas/ChatBot').then((mod) => mod.ChatBot), { ssr: false })
const Dom = dynamic(() => import('@/components/canvas/ChatBot').then((mod) => mod.Dom), { ssr: false })
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
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const CameraScreen = dynamic(() => import('@/components/canvas/CameraScreen').then((mod) => mod.CameraScreen), {
  ssr: false,
})
export default function Page() {
  const domContent = useRef()
  const containerRef = useRef()
  return (
    <div ref={containerRef} className='content-container'>
      <div
        ref={domContent}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}
      />
      {/* <Dom domContent={domContent} containerRef={containerRef} /> */}
      <CameraScreen />
      {/* <Canvas
        shadows
        flat
        linear
        // Since the canvas will receive events from the out-most container it must ignore events
        // This will allow the HTML view underneath to receive events, too
        style={{ pointerEvents: 'none' }}
        // Re-connect r3f to a shared container, this allows both worlds (html & canvas) to receive events
        eventSource={containerRef}
        // Re-define the event-compute function which now uses pageX/Y instead of offsetX/Y
        // Without this the right hand would reset to client 0/0 if it hovers over any of the HTML elements
        eventPrefix='page'
      >
        <directionalLight
          castShadow
          intensity={0.4}
          position={[-10, 50, 300]}
          shadow-mapSize={[512, 512]}
          shadow-bias={-0.002}
        >
          <orthographicCamera attach='shadow-camera' args={[-2000, 2000, 2000, -2000, -10000, 10000]} />
        </directionalLight>
        <OrthographicCamera makeDefault={true} far={100000} near={-100000} position={[0, 0, 1000]} />
        <hemisphereLight intensity={0.5} color='#eaeaea' position={[0, 1, 0]} />
        <ChatBot portal={domContent} position={[0, -50, 0]} />
      </Canvas> */}
    </div>
  )
}
