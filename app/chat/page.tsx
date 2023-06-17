'use client'
import { useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'
const PageLayout = dynamic(() => import('@/components/dom/PageLayout').then((mod) => mod), { ssr: false })
const CameraScreen = dynamic(() => import('@/components/canvas/CameraScreen').then((mod) => mod.CameraScreen), {
  ssr: false,
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})

type MainProps = {}

const Main = ({}: MainProps) => {
  const domContent = useRef(null)
  const containerRef = useRef(null)

  return (
    <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
      <PageLayout smallSidebar>
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
            }}
          />
          <View
            camera={{ position: [0, 5, 18], fov: 15, near: 1, far: 50 }}
            className=' top-0 flex h-full w-full flex-col items-center justify-center'
          >
            <CameraScreen portal={domContent} />
          </View>
        </div>
      </PageLayout>
    </Suspense>
  )
}

export default Main
