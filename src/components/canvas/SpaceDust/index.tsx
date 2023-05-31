import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import Random from 'canvas-sketch-util/random'

interface Particle {
  time: number
  factor: number
  speed: number
  x: number
  y: number
  z: number
}

interface SpaceDustProps {
  count: number
}

const SpaceDust: React.FC<SpaceDustProps> = ({ count }) => {
  const mesh = useRef<THREE.InstancedMesh>()
  const light = useRef<THREE.PointLight>()

  // Generate some random positions, speed factors and timings
  const particles = useMemo<Particle[]>(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const time = Random.range(0, 100)
      const factor = Random.range(20, 120)
      const speed = Random.range(0.005, 0.01) / 2
      const x = Random.range(-50, 50)
      const y = Random.range(-50, 50)
      const z = Random.range(-50, 50)

      temp.push({ time, factor, speed, x, y, z })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(() => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z } = particle

      // Update the particle time
      const t = (particle.time += speed)

      // Update the particle position based on the time
      // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10,
      )

      // Derive an oscillating value which will be used
      // for the particle size and rotation
      const s = Math.cos(t)
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()

      // And apply the matrix to the instanced item
      mesh.current?.setMatrixAt(index, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color='white' />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry args={[0.1, 0]} />
        <meshPhongMaterial color='#7556ba' />
      </instancedMesh>
    </>
  )
}

export default SpaceDust