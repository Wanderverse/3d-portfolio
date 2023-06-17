'use client'
import Loader from '@/components/dom/Loader'
import { generateRandomInteger } from '@/utils/numberUtils'
import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

import styles from './Overlay.module.sass'
import { Trail } from '@/utils/animationUtils'

const Overlay = () => {
  const [open, setOpen] = useState(false)

  // Simulate page load event
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
    }, 2000) // Change the delay as needed

    return () => clearTimeout(timer) // Clean up timer
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: 40,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          padding: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className='font-semibold text-5xl leading-tight'
          style={{
            flex: '1 1 100%',
            // height: 100,
            // fontSize: 30,
            color: '',
            letterSpacing: -1,
          }}
        >
          <div className='flex flex-row justify-between'>
            <span className='text-[30px] font-normal'>Hello__</span>
            <span style={{ height: 30, fontSize: 30, textAlign: 'right', color: '' }}>⎑</span>
          </div>
          <span>I'm</span>
          <span className='text-purple-600 text-6xl font-bold'> THIEN NGUYEN</span>
          <Trail open={open}>
            <span className='mt-10 mb-0 font-normal leading-tight text-2xl tracking-tight'>
              <span>I am a {'  '}</span>
              <TypeAnimation
                sequence={[
                  ' SOFTWARE ENGINEER',
                  2000,
                  ' DESIGNER',
                  2000,
                  ' DIGITAL ARTIST',
                  2000,
                  ' CREATOR',
                  2000,
                  ' MUSICIAN',
                  2000,
                ]}
                wrapper='span'
                speed={10}
                className=' text-4xl font-semibold text-orange-400 '
                repeat={Infinity}
              />
            </span>
          </Trail>
          <div
            style={{
              position: 'relative',
              width: '100%',
              padding: 0,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <p className='text-lg' style={{ flex: '1 1 0%', height: '100%', color: '' }}>
              <p className='font-bold'>A Creative Engineer at the Intersection of Art and AI</p>
              <p className='text-sm font-semibold '>
                Art and code are simply two languages telling the same story of creation.
              </p>
              <br />
              <b>—</b>
            </p>

            <p
              style={{
                transform: 'rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)',
                transformOrigin: 'right',
                fontSize: 12,
                fontWeight: '700',
                lineHeight: '100%',
                textAlign: 'right',
                color: '',
                whiteSpace: 'nowrap',
              }}
            >
              DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
            </p>
          </div>
        </div>
        <div style={{ flex: '1 1 0%', display: 'flex', gap: '2em' }}></div>
      </div>
      <div style={{ height: 100 }} />

      <div style={{ height: 10 }} />
      <div
        className='full'
        style={{
          fontFamily: "'Antonio', sans-serif",
          width: '100%',
          flex: '1 1 0%',
          padding: 0,
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {/* <p style={{ flex: '1 1 0%', fontSize: 250, lineHeight: '1em', color: '', margin: 0, letterSpacing: -10 }}>X</p> */}
        <div style={{ width: 10 }} />
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          pointerEvents: 'all',
          //   pointer: 'auto',
          width: '100%',
          padding: 0,
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <p
          className='full'
          style={{ whiteSpace: 'nowrap', flex: '1 1 0%', fontSize: 12, lineHeight: '1.5em', color: '' }}
        >
          <b>A Creative Coder's Journey</b>
          <br />
          Where Technology Meets Imagination
        </p>
        <div style={{ width: 10 }} />
        <div style={{ width: 10 }} />
        <p
          className='full'
          style={{ flex: '1 1 0%', fontSize: 12, lineHeight: '1em', textAlign: 'right', color: '' }}
        ></p>
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40 }}>
        <p style={{ flex: '1 1 0%', fontSize: 12, lineHeight: '1em', textAlign: 'right', color: '' }}>
          <a href='http://thien-nguyen.dev/'>thien-nguyen.dev</a>
        </p>
      </div>
    </div>
  )
}

export default Overlay
