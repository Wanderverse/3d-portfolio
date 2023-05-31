'use client'

import { useFrame } from '@react-three/fiber'
import { useState } from 'react'
import Particles from '../Particles'
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing'

const Landing = () => {
  const [isNavigating, setIsNavigating] = useState(false)

  useFrame((state, delta) => {
    if (isNavigating) {
      z.advance(delta * 1000)
      camera.position.setZ(z.animation.values[0].getValue())
      return
    }
  })
  const colors = {
    malevolentIllusion: ['#c06995', '#de77c7', '#df86df', '#d998ee', '#ceadf4', '#c6bff9'],
    sunnyRainbow: ['#fbe555', '#fb9224', '#f45905', '#be8abf', '#ffeed0', '#feff89'],
  }

  return (
    <>
      <group>
        <Particles count={20000} isNavigating={isNavigating} />
        <EffectComposer>
          <Bloom intensity={10} luminanceSmoothing={2} luminanceThreshold={0.1} />
          <ChromaticAberration offset={[0.0012, 0.0005]} />
        </EffectComposer>
      </group>
    </>
    // </Suspense>
  )
}

export default Landing
