'use client'

import Particles from '../Particles'
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
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
      <Particles count={20000} isNavigating={isNavigating} />
      <EffectComposer>
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
        <Bloom intensity={1} luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={0.1} />
        <ChromaticAberration offset={[0.005, 0.001]} radialModulation />
      </EffectComposer>
    </>
  )
}

export default memo(Landing)
