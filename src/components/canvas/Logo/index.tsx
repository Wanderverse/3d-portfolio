import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useGLTF,
  Text,
  Decal,
  Edges,
  Caustics,
  Environment,
  OrbitControls,
  RenderTexture,
  RandomizedLight,
  PerspectiveCamera,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from '@react-three/drei'
import { Geometry, Base, Subtraction } from '@react-three/csg'
import { useRouter } from 'next/navigation'
import useSpline from '@splinetool/r3f-spline'

function Logo({ route = '/chat', cutterScale = 0.85, cutterPos = [0, 0, 0], ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/kg7ufWdVbqlqpwxE/scene.splinecode')
  const [transitionStart, setTransitionStart] = useState(false)

  const [hovered, hover] = useState(false)
  const router = useRouter()
  const sphereRef = useRef(null)
  const decalRef = useRef(null)
  const portalRef = useRef(null)
  const sphereTargetScale = useRef(1) // non-hovered scale

  useFrame((state, delta) => {
    const { clock } = state
    const time = clock.getElapsedTime() % 10 // Repeat every 10 seconds
    const easedTime = Math.sin((time / 10) * Math.PI) // Ease in and out

    if (sphereRef.current) {
      sphereRef.current.rotation.y = (easedTime / 2) * Math.PI * 2
      sphereRef.current.rotation.z = (easedTime / 4) * Math.PI * 2

      // Interpolate the scale of the sphere
      const currentScale = sphereRef.current.scale.x
      const targetScale = sphereTargetScale.current
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
      sphereRef.current.scale.set(newScale, newScale, newScale)
    }
  })

  useFrame((state, delta) => {
    if (transitionStart && sphereRef.current) {
      // Scale the sphere down to 0
      const currentScale = sphereRef.current.scale.x
      const targetScale = 0 // Scale down to 0
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
      sphereRef.current.scale.set(newScale, newScale, newScale)

      // Once the scale is close enough to 0, navigate to the new page
      if (newScale < 0.55) {
        router.push(route)
      }
    }
  })

  return (
    <Caustics color='#ffffff' lightSource={[5, 5, -10]} worldRadius={0.6} ior={1.2} intensity={0.2}>
      <mesh
        name='Sphere'
        geometry={nodes.Sphere.geometry}
        castShadow
        receiveShadow
        scale={1}
        onClick={() => {
          setTransitionStart(true)
        }}
        onPointerOver={() => {
          if (!transitionStart) {
            hover(true)
          }
        }}
        onPointerOut={() => {
          if (!transitionStart) {
            hover(false)
          }
        }}
        ref={sphereRef}
      >
        <Geometry>
          <Base geometry={nodes.Sphere.geometry} />
          <Subtraction scale={cutterScale}>
            <sphereGeometry />
          </Subtraction>
        </Geometry>
        <MeshTransmissionMaterial
          temporalDistortion={0.2}
          distortion={20}
          distortionScale={1}
          color='#8844bf'
          resolution={1024}
          thickness={5}
          backsideThickness={5}
          anisotropicBlur={5}
          backside={true}
          roughness={0.5}
          ior={0.95}
          chromaticAberration={2}
          transmission={hovered ? 1.6 : 1.4}
        />
      </mesh>
      {hovered && (
        <group name='Portal.Collective' position={[0, 0, 0]} scale={0.001} ref={portalRef}>
          <group name='Circle' position={[0, -180, 0]} scale={0.1}>
            <group name='Button' position={[32.34, -130.02, 229.75]}>
              <group
                name='Button.Animation'
                position={[-305.51, 2000, -3783.41]}
                // rotation={[Math.PI / 2, 0, 0]}
                scale={13.22}
              >
                <mesh
                  name='Border 2'
                  geometry={nodes['Border 2'].geometry}
                  material={materials.COLLECTIVE}
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
                  scale={1.1}
                />
              </group>
              <group name='Arrow' position={[-15.95, 2100.23, 1500.84]} scale={10}>
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
            </group>
          </group>
        </group>
      )}
    </Caustics>
  )
}

function TickerTexture() {
  const textRef = useRef()
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      if (++count > 99) count = 0
      textRef.current.text = `${count}%`
      textRef.current.sync()
    }, 100)
    return () => clearInterval(interval)
  })
  return (
    <RenderTexture attach='map' anisotropy={16}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[1.5, 0, 5]} />
      <Text anchorX='right' font='/Inter-Medium.woff' rotation={[0, Math.PI, 0]} ref={textRef} fontSize={1.5} />
    </RenderTexture>
  )
}

export default Logo
