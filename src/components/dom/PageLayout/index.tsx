'use client'
import { memo, useEffect, useState } from 'react'
import { enablePageScroll, clearQueueScrollLocks } from 'scroll-lock'
import Head from 'next/head'
import { useMediaQuery } from 'react-responsive'
import LeftSidebar from '@/components/dom/LeftSidebar'
import { twMerge } from 'tailwind-merge'

type LayoutProps = {
  noPadding?: boolean
  smallSidebar?: boolean
  hideRightSidebar?: boolean
  backUrl?: string
  children: React.ReactNode
}

const PageLayout = ({ noPadding = false, smallSidebar, hideRightSidebar, backUrl, children }: LayoutProps) => {
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

  const padding = () => {
    if (noPadding) return ''
    else return visibleSidebar ? 'pl-24 md:pl-24' : smallSidebar ? 'pl-24 md:pl-24' : 'pl-80 md:pl-24'
  }

  useEffect(() => {
    setVisibleSidebar(smallSidebar || isDesktop)
  }, [isDesktop, smallSidebar])

  return (
    <>
      <Head>
        <title>Thien Nguyen</title>
      </Head>
      <div className={`  md:bg-n-1 dark:md:bg-n-7 ${padding()}`}>
        {/* <div
        className={`bg-n-6  ${visibleSidebar ? 'pl-24 md:pl-24' : smallSidebar ? 'pl-80 md:pl-24' : 'pl-80 md:pl-24'}`}
      > */}
        <LeftSidebar
          value={visibleSidebar}
          setValue={setVisibleSidebar}
          visibleRightSidebar={visibleRightSidebar}
          smallSidebar={smallSidebar}
        />
        <div className={`flex  min-h-screen min-h-screen-ios  `}>
          <div className={`relative flex grow max-w-full bg-n-3 dark:bg-transparent`}>
            <div className={`relative flex flex-col grow max-w-full `}>{children}</div>
          </div>
        </div>
      </div>
      <div
        className={twMerge(
          `fixed inset-0 z-10 bg-n-7/80 invisible opacity-0 md:hidden ${
            (!visibleSidebar && smallSidebar) || (visibleRightSidebar && 'visible opacity-100')
          }`,
        )}
        onClick={handleClickOverlay}
      ></div>
      {/* </div> */}
    </>
  )
}
export default memo(PageLayout)
