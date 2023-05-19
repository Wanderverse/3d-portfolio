'use client'

import { useColorMode } from '@chakra-ui/color-mode'
import { twMerge } from 'tailwind-merge'
import Icon from '@/components/dom/Icon'

type ToggleThemeProps = {
  visible?: boolean
}

const SendEmail = ({ visible }: ToggleThemeProps) => {
  const { colorMode, setColorMode } = useColorMode()

  return (
    // <div
    //   className={`${
    //     !visible && `mb-3 relative flex w-full p-1 bg-n-6 rounded-xl `
    //   }`}
    // >
    <button
      className={`mb-3 relative z-1 group flex justify-center items-center flex w-full h-12 rounded-xl bg-n-6 hover:text-n-1 text-n-4 ${
        visible && 'flex w-full h-16 rounded-xl bg-n-6 '
      }'}`}
      onClick={() => {
        window.location.href = 'mailto:thiennguyen.skipdisk@gmail.com'
      }}
    >
      <Icon
        className={`fill-n-4 transition-colors group-hover:fill-n-1 fill-n-4 ${!visible && 'mr-3'}`}
        name={'email'}
      />
      {!visible && 'Email Me'}
    </button>
    // </div>
  )
}

export default SendEmail
