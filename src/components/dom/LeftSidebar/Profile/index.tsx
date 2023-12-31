'use client'

import Link from 'next/link'
import Image from '@/components/dom/Image'
import Icon from '@/components/dom/Icon'

type ProfileProps = {
  visible?: boolean
}

const Profile = ({ visible }: ProfileProps) => (
  <div className={`${visible ? 'mb-6' : 'mb-3 shadow-[0_1.25rem_1.5rem_0_rgba(0,0,0,0.5)]'}`}>
    <div className={`${!visible && 'p-2.5 bg-n-6 rounded-xl'}`}>
      <div className={`flex items-center ${visible ? 'justify-center' : 'px-2.5 py-2.5 pb-4.5'}`}>
        <div className='relative w-10 h-10'>
          <Image className='rounded-full object-cover' src='/images/avatar.jpg' fill alt='Avatar' />
          <div className='absolute -right-0.75 -bottom-0.75 w-4.5 h-4.5 bg-primary-2 rounded-full border-4 border-n-6'></div>
        </div>
        {!visible && (
          <>
            <div className='ml-4 mr-4'>
              <div className='base2 font-semibold text-n-1'>Thien Nguyen</div>
              <div className='caption1 font-semibold text-n-3/50'>559chop@gmail.com</div>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
)

export default Profile
