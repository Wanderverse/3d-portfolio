'use client'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'
import dynamic from 'next/dynamic'
import { Suspense, useEffect, useRef, useState } from 'react'

const Overlay = dynamic(() => import('@/components/dom/Overlay').then((mod) => mod), { ssr: true })
const Landing = dynamic(() => import('@/components/canvas/Landing').then((mod) => mod), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => <Loader dotVariant={generateRandomInteger(0, 11)} />,
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  const [isNavigating, setIsNavigating] = useState(false)
  const [key, setKey] = useState(Math.random())

  const testRef = useRef(null)
  useEffect(() => {
    setKey(Math.random())
  }, [])

  return (
    <>
      {/* {isNavigating && <Loader dotVariant={generateRandomInteger(0, 11)} />} */}
      <Overlay key={key} />
      <Suspense fallback={<Loader dotVariant={generateRandomInteger(0, 11)} />}>
        {/* <View className='flex h-full w-full flex-col items-center justify-center'> */}
        <View
          ref={testRef}
          key={key}
          className='absolute top-0 flex h-full w-full flex-col items-center justify-center'
        >
          <Common key={key} />
          <Landing isNavigating={isNavigating} setIsNavigating={setIsNavigating} />
        </View>
      </Suspense>
    </>
  )
}
