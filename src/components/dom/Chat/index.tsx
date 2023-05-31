'use client'

import { useState, forwardRef } from 'react'
import Icon from '@/components/dom/Icon'
import ModalShareChat from '@/components/dom/ModalShareChat'
import Actions from './Actions'

type ChatProps = {
  title: string
  children: React.ReactNode
}

const Chat = forwardRef(({ title, children }: ChatProps, ref) => {
  const [favorite, setFavorite] = useState<boolean>(false)
  // const [visibleModal, setVisibleModal] = useState<boolean>(false)

  return (
    <>
      <div className='flex items-center min-h-[4.5rem] px-10 py-3 border-b border-n-3 shadow-[0_0.75rem_2.5rem_-0.75rem_rgba(0,0,0,0.06)] dark:border-n-5 dark:shadow-[0_0.75rem_2.5rem_-0.75rem_rgba(0,0,0,0.15)]'>
        <div className='mr-auto h5 truncate'>{title}</div>
        <div className='flex items-center ml-6'>
          <button className='group w-8 h-8' onClick={() => setFavorite(!favorite)}>
            <Icon
              className={`${favorite ? 'fill-accent-5' : 'fill-n-4 transition-colors group-hover:fill-accent-5'}`}
              name={favorite ? 'star-fill' : 'star'}
            />
          </button>
          {/* <button className='group w-8 h-8 ml-6 md:ml-3' onClick={() => setVisibleModal(true)}>
            <Icon className='fill-n-4 transition-colors group-hover:fill-primary-1' name='share' />
          </button> */}
          {/* <Actions /> */}
        </div>
      </div>
      <div ref={ref} className='relative z-2 grow p-6 space-y-10 overflow-y-auto scroll-smooth scrollbar-none'>
        {children}
      </div>
      {/* <ModalShareChat visible={visibleModal} onClose={() => setVisibleModal(false)} /> */}
    </>
  )
})

export default Chat
