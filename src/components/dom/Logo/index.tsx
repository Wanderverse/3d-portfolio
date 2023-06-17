'use client'

import Link from 'next/link'
import Image from '@/components/dom/Image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

type LogoProps = {
  className?: string
  dark?: boolean
}

const Logo = ({ className, dark }: LogoProps) => {
  const router = useRouter()

  return (
    <Link className={`flex w-[15rem] ml-0 pl-0 mr-5 ${className}`} href='/' replace prefetch>
      <Image
        className='w-full h-auto'
        src={dark ? '/images/logo.png' : '/images/logo.png'}
        width={190}
        height={40}
        alt='Logo'
      />
    </Link>
  )
}
export default Logo
