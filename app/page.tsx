'use client'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'
import dynamic from 'next/dynamic'
import { Suspense, useEffect, useRef, useState } from 'react'

const Overlay = dynamic(() => import('@/components/dom/Overlay').then((mod) => mod), { ssr: false })
const Landing = dynamic(() => import('@/components/canvas/Landing').then((mod) => mod), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const [isNavigating, setIsNavigating] = useState(false)
  const [key, setKey] = useState(Math.random())

  return (
    <>
      <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
        <Overlay />
        {/* <View className='flex h-full w-full flex-col items-center justify-center'> */}
        <View className='absolute top-0 flex h-full w-full flex-col items-center justify-center'>
          <Landing isNavigating={isNavigating} setIsNavigating={setIsNavigating} />
          <Common />
        </View>
      </Suspense>
    </>
  )
}
