'use client'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'
import dynamic from 'next/dynamic'
import { Suspense, useEffect, useRef, useState } from 'react'
import Logo from '@/components/canvas/Logo'
import { Common } from '@/components/View'

const Landing = dynamic(() => import('@/components/canvas/Landing').then((mod) => mod), { ssr: false })
const Overlay = dynamic(() => import('@/components/dom/Overlay').then((mod) => mod), {
  ssr: false,
  // loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})
const View = dynamic(() => import('@/components/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})

export default function Page() {
  const [isNavigating, setIsNavigating] = useState(false)

  return (
    <>
      <Overlay />
      <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
        <View className='absolute top-0 flex h-full w-full flex-col items-center justify-center'>
          <Landing isNavigating={isNavigating} setIsNavigating={setIsNavigating}>
            <Logo
              isNavigating={isNavigating}
              setIsNavigating={setIsNavigating}
              route='/chat'
              scale={0.6}
              position={[0, -0.5, 0]}
            />
          </Landing>
          <Common />
        </View>
      </Suspense>
    </>
  )
}
