'use client'
import { useRef, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'

const Phone = dynamic(() => import('@/components/canvas/Phone/test').then((mod) => mod), {
  ssr: false,
})
const PageLayout = dynamic(() => import('@/components/dom/PageLayout').then((mod) => mod), { ssr: false })
const CameraScreen = dynamic(() => import('@/components/canvas/CameraScreen').then((mod) => mod.CameraScreen), {
  ssr: false,
})
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

type MainProps = {}

const Main = ({}: MainProps) => {
  const domContent = useRef(null)
  const containerRef = useRef(null)

  return (
    <PageLayout noPadding smallSidebar>
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
            pointerEvents: 'auto',
            touchAction: 'auto',
          }}
        />
        {/* <View className=' top-0 flex h-full w-full flex-col items-center justify-center'> */}
        <View className='absolute top-0 flex h-screen w-full flex-col items-center justify-center'>
          <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
            {/* <CameraScreen portal={domContent} /> */}
            <Phone portal={domContent} />
            <Common color='' />
          </Suspense>
        </View>
      </div>
    </PageLayout>
  )
}

export default Main
