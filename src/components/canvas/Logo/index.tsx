'use client'

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useCursor, MeshTransmissionMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'
import useSpline from '@splinetool/r3f-spline'

const Logo = ({ route = '/chat', ...props }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/kg7ufWdVbqlqpwxE/scene.splinecode')

  const [hovered, hover] = useState(false)
  const router = useRouter()
  const torusRef = useRef(null)
  const sphereRef = useRef(null)
  const portalRef = useRef(null)
  const circleRef = useRef(null)

  const torusTargetScale = useRef(0.008) // non-hovered scale
  const sphereTargetScale = useRef(0.002) // non-hovered scale
  const portalTargetScale = useRef(0.0) // non-hovered scale
  const sphereTargetDistortionScale = useRef(1)
  const sphereTargetThickness = useRef(10)
  const sphereTargetChromaticAberration = useRef(5)
  const sphereTargetEmissiveIntensity = useRef(0)

  useCursor(hovered)

  useFrame((state, delta) => {
    const { clock } = state
    const time = clock.getElapsedTime() % 10 // Repeat every 10 seconds
    const easedTime = Math.sin((time / 10) * Math.PI) // Ease in and out

    if (torusRef.current) {
      // If we're in the first half of the cycle (0-5 seconds), rotate one way,
      // otherwise (5-10 seconds) rotate the other way.
      if (time < 10) {
        torusRef.current.rotation.x = (time / 5) * Math.PI * 2
        torusRef.current.rotation.z = (easedTime / 2) * Math.PI * 2
        torusRef.current.rotation.y = (easedTime / 4) * Math.PI * 2
      } else {
        torusRef.current.rotation.x = Math.PI * 2 - ((time - 5) / 5) * Math.PI * 2
        torusRef.current.rotation.z = ((easedTime - 5) / 2) * Math.PI * 2
        torusRef.current.rotation.y = ((easedTime - 5) / 4) * Math.PI * 2
      }

      // Interpolate the scale of the torus
      const currentScale = torusRef.current.scale.x
      const targetScale = torusTargetScale.current
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
      torusRef.current.scale.set(newScale, newScale, newScale)
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y = (easedTime / 2) * Math.PI * 2
      sphereRef.current.rotation.z = (easedTime / 4) * Math.PI * 2

      // Interpolate the scale of the sphere
      const currentScale = sphereRef.current.scale.x
      const targetScale = sphereTargetScale.current
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
      sphereRef.current.scale.set(newScale, newScale, newScale)

      // Interpolate the emissive intensity of the sphere's material
      const currentEmissiveIntensity = sphereRef.current.material.emissiveIntensity
      const targetEmissiveIntensity = sphereTargetEmissiveIntensity.current
      sphereRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
        currentEmissiveIntensity,
        targetEmissiveIntensity,
        delta,
      )

      const currentDistortionScale = sphereRef.current.material.distortionScale
      const targetDistortionScale = sphereTargetDistortionScale.current
      sphereRef.current.material.distortionScale = THREE.MathUtils.lerp(
        currentDistortionScale,
        targetDistortionScale,
        delta,
      )

      const currentThickness = sphereRef.current.material.thickness
      const targetThickness = sphereTargetThickness.current
      sphereRef.current.material.thickness = THREE.MathUtils.lerp(currentThickness, targetThickness, delta)

      const currentChromaticAberration = sphereRef.current.material.chromaticAberration
      const targetChromaticAberration = sphereTargetChromaticAberration.current
      sphereRef.current.material.chromaticAberration = THREE.MathUtils.lerp(
        currentChromaticAberration,
        targetChromaticAberration,
        delta,
      )
    }

    if (portalRef.current) {
      // portalRef.current.rotation.y = (easedTime / 2) * Math.PI * 2
      // portalRef.current.rotation.z = (easedTime / 4) * Math.PI * 2

      // Interpolate the scale of the sphere
      const currentScale = portalRef.current.scale.x
      const targetScale = portalTargetScale.current
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
      portalRef.current.scale.set(newScale, newScale, newScale)
    }
  })

  return (
    <group {...props} dispose={null}>
      <group name='Portal.Collective' position={[0, 0, 0]} scale={0.0} ref={portalRef}>
        <group name='Button' position={[32.34, -600.02, 229.75]} scale={0.05}>
          {/* <group name='Button' position={[0, 0, 0]} scale={0.05}> */}
          <group
            name='Button.Animation'
            position={[-305.51, 1483.06, -3783.41]}
            // rotation={[Math.PI / 2, 0, 0]}
            scale={13.22}
          >
            <group name='Arrow' position={[-15.95, 2.23, 28.84]}>
              <mesh
                name='Rectangle 3'
                geometry={nodes['Rectangle 3'].geometry}
                material={materials['Button.Arrow']}
                castShadow
                receiveShadow
                position={[98.96, -44.12, 0]}
                rotation={[0, 0, Math.PI / 4]}
                scale={[0.64, 1, 1]}
              />
              <mesh
                name='Rectangle 2'
                geometry={nodes['Rectangle 2'].geometry}
                material={materials['Button.Arrow']}
                castShadow
                receiveShadow
                position={[99.36, 44.12, 0]}
                rotation={[0, 0, -Math.PI / 4]}
                scale={[0.64, 1, 1]}
              />
              <mesh
                name='Rectangle'
                geometry={nodes.Rectangle.geometry}
                material={materials['Button.Arrow']}
                castShadow
                receiveShadow
                position={[-22.07, -0.13, 0]}
                scale={[1.15, 1, 1]}
              />
            </group>
            <group name='Circle' position={[0, 0, 1.2]}>
              <mesh
                name='Border 2'
                geometry={nodes['Border 2'].geometry}
                material={materials.COLLECTIVE}
                castShadow
                receiveShadow
                position={[0, 0, 4.41]}
                rotation={[0, 0, 0]}
                scale={1.32}
              />
              <mesh
                name='Border 1'
                geometry={nodes['Border 1'].geometry}
                material={materials.COLLECTIVE}
                castShadow
                receiveShadow
                position={[0, 0, 1.86]}
                scale={1.2}
              />
              <mesh
                name='Bg Circle'
                geometry={nodes['Bg Circle'].geometry}
                material={materials['Bg Circle Material']}
                castShadow
                receiveShadow
                position={[0, 0, -4.41]}
                scale={1.28}
              />
            </group>
          </group>
        </group>
        <group
          ref={circleRef}
          name='Portal.Collective.Animation'
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.5}
        >
          <group name='Title' position={[-587.04, 43.48, -300]} scale={[2.16, 2.15, 2.16]}>
            <mesh
              name='Collective'
              geometry={nodes.Collective.geometry}
              material={materials.COLLECTIVE}
              castShadow
              receiveShadow
              position={[282.24, 0, 101.33]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={2.74}
            />
          </group>
          <group name='Collective.Bg' position={[-1.68, 1.61, 1.68]} rotation={[0, 0, 0]} scale={1.08}>
            <mesh
              name='Human.Circle 2'
              geometry={nodes['Human.Circle 2'].geometry}
              material={materials.COLLECTIVE}
              castShadow
              receiveShadow
              position={[0, -151.24, 0]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={8.5}
            />
            <mesh
              name='Human.Circle'
              geometry={nodes['Human.Circle'].geometry}
              material={materials.COLLECTIVE}
              castShadow
              receiveShadow
              position={[0, 25.42, 0]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={8.5}
            />
            <mesh
              name='Ellipse 2'
              geometry={nodes['Ellipse 2'].geometry}
              // material={materials['Ellipse 2 Material']}
              position={[0, 26.41, 0]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={8.31}
            >
              <MeshTransmissionMaterial
                distortionScale={0.5}
                color='#a65dff'
                resolution={1024}
                thickness={10}
                backsideThickness={5}
                anisotropy={5}
                temporalDistortion={0.2}
                distortion={0.3}
                backside
                ior={0.9}
                roughness={0.2}
                chromaticAberration={5}
                transmission={1.5}
              />
            </mesh>
          </group>
        </group>
      </group>
      <mesh
        name='Torus'
        geometry={nodes.Torus.geometry}
        material={materials['Torus Material']}
        castShadow
        receiveShadow
        scale={0.008}
        ref={torusRef}
      />
      <mesh
        name='Sphere'
        geometry={nodes.Sphere.geometry}
        castShadow
        receiveShadow
        scale={0.02}
        onClick={() => router.push(route)}
        onPointerOver={() => {
          hover(true)
          sphereTargetScale.current = 0.005 // hovered scale
          sphereTargetEmissiveIntensity.current = 0 // hovered emissive intensity
          torusTargetScale.current = 0 // hovered scale
          portalTargetScale.current = 0.003
          sphereTargetDistortionScale.current = 0 // hovered distortion scale
          sphereTargetThickness.current = 1 // hovered thickness
          sphereTargetChromaticAberration.current = 2 // hovered chromatic aberration
        }}
        onPointerOut={() => {
          hover(false)
          sphereTargetScale.current = 0.003
          sphereTargetEmissiveIntensity.current = 10
          torusTargetScale.current = 0.008
          portalTargetScale.current = 0

          sphereTargetDistortionScale.current = 1 // hovered distortion scale
          sphereTargetThickness.current = 10 // hovered thickness
          sphereTargetChromaticAberration.current = 5 // hovered chromatic aberrattion
        }}
        ref={sphereRef}
      >
        <MeshTransmissionMaterial
          distortionScale={1}
          color='#912ce3'
          resolution={hovered ? 2048 : 1024}
          thickness={10}
          backsideThickness={hovered ? 0 : 10}
          anisotropy={hovered ? 0.1 : 10}
          temporalDistortion={1}
          distortion={hovered ? 0.5 : 20}
          backside={hovered ? false : true}
          ior={1}
          roughness={hovered ? 0 : 0.5}
          chromaticAberration={hovered ? 0 : 5}
          transmission={hovered ? 1.6 : 1.3}
        />
      </mesh>
    </group>
  )
}

export default Logo
