'use client'
import { useRef, Suspense, useState } from 'react'
import dynamic from 'next/dynamic'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import Phone from '@/components/canvas/Phone'
import { Common } from '@/components/View'
import ChatContent from '@/components/canvas/ChatContent'
import { useMediaQuery } from 'react-responsive'

const PageLayout = dynamic(() => import('@/components/dom/PageLayout').then((mod) => mod), { ssr: false })
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})
// const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
const Landing = dynamic(() => import('@/components/canvas/Landing').then((mod) => mod), { ssr: false })

type MainProps = {}

const Main = ({}: MainProps) => {
  const domContent = useRef(null)
  const containerRef = useRef(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  return (
    <>
      <PageLayout noPadding={!isMobile} smallSidebar>
        <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
          <div ref={containerRef} className='content-container'>
            <div
              ref={domContent}
              style={{
                background: 'transparent',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                touchAction: 'none',
                zIndex: 1,
                // pointerEvents: 'all',
              }}
            />
            {isMobile && <ChatContent />}
            <View presentation className='absolute top-0 flex h-full w-full flex-col items-center justify-center'>
              <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
                <Landing isNavigating={isNavigating} setIsNavigating={setIsNavigating}>
                  {!isMobile && <Phone portal={domContent} />}
                </Landing>
                <Common color='' />
              </Suspense>
            </View>
          </div>
        </Suspense>
      </PageLayout>
    </>
  )
}
export default Main
