'use client'

import { useFrame } from '@react-three/fiber'
import { useState, memo, Suspense } from 'react'
import Particles from '../Particles'
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import Logo from '../Logo'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Landing = () => {
  const [isNavigating, setIsNavigating] = useState(false)

  useFrame((state, delta) => {
    if (isNavigating) {
      z.advance(delta * 1000)
      camera.position.setZ(z.animation.values[0].getValue())
      return
    }
  })

  return (
    <>
      <Particles count={20000} isNavigating={isNavigating} />
      <Logo route='/chat' scale={0.6} position={[0, 0, 0]} />
      <AccumulativeShadows temporal frames={100} scale={20} alphaTest={0.85} color='#925edc' colorBlend={2}>
        <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>

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
