// @ts-nocheck
'use client'

import Particles from '../Particles'
import { memo, useEffect } from 'react'

const Landing = ({ isNavigating, setIsNavigating, children }) => {
  useEffect(() => {
    return () => {
      setIsNavigating(false)
    }
  }, [])
  return (
    <>
      {children}
      <Particles count={10000} isNavigating={isNavigating} />
    </>
  )
}

export default memo(Landing)
