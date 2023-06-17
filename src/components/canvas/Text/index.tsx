import { RGBELoader } from 'three-stdlib'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Center, Text3D, MeshTransmissionMaterial } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useNavigationEvent } from '@/hooks/useNavigationEvents'
import { easings } from '@react-spring/web'

const Text = ({ children, isNavigating, font = '/Tomorrow-SemiBold.json' }) => {
  const texture = useLoader(
    RGBELoader,
    'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr',
  )
  const config = {
    backside: true,
    backsideThickness: 10,
    samples: 10,
    resolution: 1024,
    transmission: 1.9,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    thickness: 0.5,
    chromaticAberration: 0,
    anisotropicBlur: 0.5,
    roughness: 0.3,
    distortion: 5,
    distortionScale: 1,
    temporalDistortion: 0.7,
    ior: 0.9,
    color: '#8a28df',
    gColor: '#b3c669',
  }
  const [pageTransitionOut, setPageTransitionOut] = useState(false)

  useNavigationEvent(() => setPageTransitionOut(!pageTransitionOut))

  // `immediate` key is added to prevent animation on initial render
  const props = useSpring({
    to: { scale: pageTransitionOut || isNavigating ? ([0, 0, 0] as const) : ([1, 1, 1] as const) },
    from: { scale: [0, 0, 0] as const },
    immediate: pageTransitionOut || isNavigating,
    config: {
      mass: 5,
      tension: 100,
      friction: 100,
      duration: 2000,
      easing: (easing) => easings.easeInOutCirc(easing),
    },
  })

  return (
    <animated.group {...props}>
      <Center position={[-3.1, 3.5, 0]} top>
        <Text3D
          // castShadow
          // bevelEnabled
          font={font}
          scale={0.3}
          // letterSpacing={-0.03}
          height={0.2}
          bevelSize={0.5}
          bevelSegments={10}
          curveSegments={128}
          bevelThickness={0.01}
        >
          {children}
          <MeshTransmissionMaterial {...config} background={texture} />
        </Text3D>
      </Center>
    </animated.group>
  )
}

export default Text
