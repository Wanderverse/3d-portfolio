'use client'
import { useEffect, useState } from 'react'
import { enablePageScroll, clearQueueScrollLocks } from 'scroll-lock'
import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import LeftSidebar from '@/components/dom/LeftSidebar'

type LayoutProps = {
  smallSidebar?: boolean
  hideRightSidebar?: boolean
  backUrl?: string
  children: React.ReactNode
}

const PageLayout = ({ smallSidebar, hideRightSidebar, backUrl, children }: LayoutProps) => {
  const [visibleSidebar, setVisibleSidebar] = useState<any>(smallSidebar || false)
  const [visibleRightSidebar, setVisibleRightSidebar] = useState<boolean>(false)

  const isDesktop = useMediaQuery({
    query: '(max-width: 1179px)',
  })

  const handleClickOverlay = () => {
    setVisibleSidebar(true)
    setVisibleRightSidebar(false)
    clearQueueScrollLocks()
    enablePageScroll()
  }

  useEffect(() => {
    setVisibleSidebar(smallSidebar || isDesktop)
  }, [isDesktop, smallSidebar])

  return (
    <>
      <Head>
        <title>Thien Nguyen</title>
      </Head>
      <div
        className={`bg-n-6  ${visibleSidebar ? 'pl-24 md:pl-24' : smallSidebar ? 'pl-24 md:pl-24' : 'pl-80 md:pl-24'}`}
      >
        <LeftSidebar
          value={visibleSidebar}
          setValue={setVisibleSidebar}
          visibleRightSidebar={visibleRightSidebar}
          smallSidebar={smallSidebar}
        />
        <div className={`flex  min-h-screen min-h-screen-ios `}>
          <div className={`relative flex grow max-w-full bg-n-1 rounded-xl dark:bg-n-6`}>
            <div className={`relative flex flex-col grow max-w-full `}>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageLayout
