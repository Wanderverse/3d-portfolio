'use client'

import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useCursor, MeshDistortMaterial, MeshTransmissionMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import Particles from './Particles'
import useSpline from '@splinetool/r3f-spline'
import { Bloom, ChromaticAberration, EffectComposer } from '@react-three/postprocessing'
import { RGBELoader } from 'three-stdlib'

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  )
}
