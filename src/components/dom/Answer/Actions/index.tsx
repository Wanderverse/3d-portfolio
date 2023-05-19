'use client'

import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-hot-toast'
import Image from '@/components/dom/Image'
import Notify from '@/components/dom/Notify'
import ModalShareChat from '@/components/dom/ModalShareChat'

type ActionsProps = {}

const Actions = ({}: ActionsProps) => {
  const [copied, setCopied] = useState<boolean>(false)
  const [share, setShare] = useState<boolean>(false)
  const [archive, setArchive] = useState<boolean>(false)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)

  const onCopy = () => {
    setCopied(true)
    toast((t) => (
      <Notify iconCheck>
        <div className='ml-3 h6'>Content copied</div>
      </Notify>
    ))
  }

  const handleClick = () => {
    toast((t) => (
      <Notify iconCheck>
        <div className='mr-6 ml-3 h6'>1 chat archived</div>
        <button className='btn-blue btn-medium ml-3' onClick={() => toast.dismiss(t.id)}>
          Undo
        </button>
      </Notify>
    ))
  }

  const styleButton: string =
    'h-6 ml-3 px-2 bg-n-3 rounded-md caption1 txt-n-6 transition-colors hover:text-primary-1 dark:bg-n-7'

  return (
    <>
      <CopyToClipboard text='Content' onCopy={onCopy}>
        <button className={`${styleButton} md:hidden`}>Copy</button>
      </CopyToClipboard>
      <button className={styleButton}>Regenerate response</button>
      <ModalShareChat visible={visibleModal} onClose={() => setVisibleModal(false)} />
    </>
  )
}

export default Actions
