'use client'

import { useState, useEffect } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import Logo from '@/components/dom/Logo'
import Icon from '@/components/dom/Icon'
import Modal from '@/components/dom/Modal'
import Search from '@/components/dom/Search'
import Navigation from './Navigation'
import Profile from './Profile'
import ToggleTheme from './ToggleTheme'
import { resultSearch } from '@/mocks/resultSearch'
import { twMerge } from 'tailwind-merge'
import SendEmail from './SendEmail'

type LeftSidebarProps = {
  value: boolean
  setValue?: any
  smallSidebar?: boolean
  visibleRightSidebar?: boolean
}

const LeftSidebar = ({ value, setValue, smallSidebar, visibleRightSidebar }: LeftSidebarProps) => {
  const [visibleSearch, setVisibleSearch] = useState<boolean>(false)
  const [visibleSettings, setVisibleSettings] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('keydown', handleWindowKeyDown)
    return () => {
      window.removeEventListener('keydown', handleWindowKeyDown)
    }
  }, [])

  const handleWindowKeyDown = (event: any) => {
    if (event.metaKey && event.key === 'f') {
      event.preventDefault()
      setVisibleSearch(true)
    }
  }

  const navigation = [
    {
      title: 'Chat',
      icon: 'chat',
      color: 'fill-accent-2',
      url: '/',
    },
    {
      title: 'Resume',
      icon: 'barcode',
      color: 'fill-primary-2',
      onClick: () => setVisibleSearch(true),
    },
    {
      title: 'About Me',
      icon: 'user-check',
      color: 'fill-accent-1',
      url: '/updates-and-faq',
    },
  ]

  const handleClick = () => {
    setValue(!value)
    smallSidebar && value ? disablePageScroll() : enablePageScroll()
  }
  return (
    <>
      <div
        className={twMerge(
          `fixed z-20 top-0 left-0 bottom-0 flex flex-col pt-30 px-4 bg-n-7  ${
            value ? 'w-24 pb-38  md:pb-30' : 'w-80 pb-58'
          }`,
        )}
      >
        <div
          className={`absolute top-0 right-0 left-0 flex items-center h-30 pl-3 pr-4 ${
            value ? 'justify-center' : 'justify-between'
          }`}
        >
          {!value && <Logo />}
          <button className='group tap-highlight-color' onClick={handleClick}>
            <Icon
              className='fill-n-4 transition-colors group-hover:fill-n-3'
              name={value ? 'toggle-on' : 'toggle-off'}
            />
          </button>
        </div>
        <div className='grow overflow-y-auto scroll-smooth scrollbar-none'>
          <Navigation visible={value} items={navigation} />
          {/* <div
            className={`my-4 h-0.25 bg-n-6 ${value ? "-mx-4 " : "-mx-2 "}`}
          ></div> */}
          {/* <ChatList visible={value} items={chatList} /> */}
        </div>
        <div className='absolute left-0 bottom-0 right-0 pb-6 px-4 bg-n-7 before:absolute before:left-0 before:right-0 before:bottom-full before:h-10 before:bg-gradient-to-t before:from-[#131617] before:to-[rgba(19,22,23,0)] before:pointer-events-none'>
          <Profile visible={value} />
          <SendEmail visible={value} />
          <ToggleTheme visible={value} />
        </div>
      </div>
      <Modal
        className='md:!p-0'
        classWrap='md:min-h-screen-ios dark:shadow-[inset_0_0_0_0.0625rem_#232627,0_2rem_4rem_-1rem_rgba(0,0,0,0.33)] dark:md:shadow-none'
        classButtonClose='hidden md:flex md:absolute md:top-6 md:left-6 dark:fill-n-1'
        classOverlay='md:bg-n-1'
        visible={visibleSearch}
        onClose={() => setVisibleSearch(false)}
      >
        <Search items={resultSearch} />
      </Modal>
    </>
  )
}

export default LeftSidebar
