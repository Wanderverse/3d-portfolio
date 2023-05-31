import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, MeshReflectorMaterial, Circle, Text, OrbitControls, Html, Mask } from '@react-three/drei'
import Particles from '@/helpers/shaders/Particles'
import usePostprocessing from '@/helpers/shaders/usePostprocessing'
import '@/helpers/shaders/materials/ScreenMaterial'
import Embed from '../ChatBot/Embed'
import dynamic from 'next/dynamic'

const ChatContent = dynamic(() => import('@/components/canvas/ChatBot/ChatContent'), { ssr: false })

function Button(props) {
  const { nodes, materials } = useGLTF('/arc-draco.glb')
  const [hovered, setHovered] = useState(false)
  // useEffect(() => (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  return (
    <mesh
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={() => setHovered(false)}
      material={materials['black.001']}
      geometry={nodes.Slice001.geometry}
      {...props}
    />
  )
}

function Model(props) {
  const group = useRef()
  const targetCamera = useRef()
  const screen = useRef()
  const arm = useRef()
  const maskRef = useRef()
  const { portal } = props

  const { nodes, materials } = useGLTF('/arc-draco.glb')
  const [virtualScene] = useState(() => new THREE.Scene())
  const screenProps = usePostprocessing(virtualScene, targetCamera.current)

  const [b1, setB1] = useState(false)
  const [b2, setB2] = useState(false)
  const [b3, setB3] = useState(false)

  const [color] = useState(() => new THREE.Color())
  const [pointer] = useState(() => new THREE.Vector3())

  useFrame(() => {
    screen.current.color.lerp(color.set(b1 ? '#4f465d' : '#0a080c'), 0.1)
    arm.current.rotation.z = THREE.MathUtils.lerp(arm.current.rotation.z, -Math.PI / (b3 ? 3 : 2), 0.1)
  })

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <mesh
          material={materials.black}
          geometry={nodes.Cube.geometry}
          position={[0, 1, 0]}
          material-roughness={0.6}
          material-metalness={0.9}
          material-color='#cfc6db'
        >
          <mesh geometry={nodes.Slice.geometry}>
            <MeshReflectorMaterial
              resolution={1024}
              blur={[100, 200]}
              mirror={0.5}
              mixBlur={0}
              mixStrength={10}
              color='#221f2e'
              metalness={0.6}
              roughness={0}
            />
            <Text
              position={[0.34, 1.7, 0.02]}
              rotation-y={Math.PI / 2}
              fontSize={0.06}
              lineHeight={1.5}
              color='#d6bcff' // text color
            >
              {`PersonalGPT\nThien's ChatBot`}
              <meshStandardMaterial
                attach='material'
                color='#ffffff'
                emissive='#7d04ff'
                roughness={0.5}
                metalness={0.5}
              />
            </Text>
          </mesh>
          <group position={[0.06, 0, 0]}>
            <Button onPointerUp={(e) => (e.stopPropagation(), setB1(!b1))} position={[b1 ? -0.04 : 0, 0, 0]} />
            <Button onPointerUp={(e) => (e.stopPropagation(), setB2(!b2))} position={[b2 ? -0.04 : 0, -0.47, 0]} />
            <Button onPointerUp={(e) => (e.stopPropagation(), setB3(!b3))} position={[b3 ? -0.04 : 0, -0.95, 0]} />
          </group>
        </mesh>
        <group ref={arm} position={[0, 2, 1.92]}>
          <mesh
            geometry={nodes.Plane.geometry}
            material={materials['Material.004']}
            onPointerMove={(e) => pointer.copy(e.point)}
            scale={[2.2, 1, 1.2]}
            material-roughness={0.6}
            material-metalness={0.5}
            material-color='#cfc6db'
          >
            <mesh
              material={materials['black.002']}
              geometry={nodes.Plane.geometry}
              position-y={0.03}
              scale={[0.99, 0.2, 0.99]}
            >
              <screenMaterial
                ref={screen}
                transparent
                roughness={0.5}
                metalness={0.5}
                opacity={0.1}
                {...screenProps}
              ></screenMaterial>
            </mesh>
          </mesh>
          <mesh position-y={0.03}>
            <Mask
              id={1}
              colorWrite={false}
              depthWrite={false}
              // material={materials['black.002']}
              castShadow
              receiveShadow
              // position={[-0.35, 0.25, 0.12]}
              ref={maskRef}
            >
              <Html
                wrapperClass='screen-container'
                className='content-embed'
                portal={portal}
                position={[0, 0, 0]}
                rotation-x={-Math.PI / 2}
                rotation-z={Math.PI / 2}
                transform
                scale={0.15}
                material={<meshPhysicalMaterial side={THREE.FrontSide} />}
                // occlude='blending'
              >
                <div className={`screen-container ${b1 ? 'chatContent-enter-active' : 'chatContent-enter'}`}>
                  <ChatContent />
                </div>{' '}
              </Html>
            </Mask>
          </mesh>
        </group>
        <mesh material={materials['Material.001']} geometry={nodes.Plane003.geometry} scale={[11.8, 11.8, 11.8]} />
      </group>
      <Circle args={[12.75, 36, 36]} rotation-x={-Math.PI / 2} position={[1, -1.39, 0]}>
        <MeshReflectorMaterial
          resolution={1024}
          blur={[400, 50]}
          mirror={0}
          mixBlur={0.5}
          mixStrength={10}
          transparent
          opacity={0.8}
          color='#433e49'
          metalness={0.95}
          roughness={1}
        />
      </Circle>
    </>
  )
}

export function CameraScreen({ portal }) {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [2, 5, 18], fov: 15, near: 1, far: 50 }}>
      <ambientLight intensity={2} />
      <color attach='background' args={['#28252d']} />
      <fog attach='fog' args={['#413f45', 20, 25]} />
      <directionalLight position={[10, -10, 10]} intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <Suspense fallback={null}>
        <Model portal={portal} position={[1.5, -1.4, 0]} rotation={[0, -Math.PI / 2, 0]} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableRotate={true}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
    </Canvas>
  )
}