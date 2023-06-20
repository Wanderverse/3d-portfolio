// @ts-nocheck
'use client'
import * as THREE from 'three'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Html, Mask, MeshReflectorMaterial, useGLTF, useMask } from '@react-three/drei'
import ChatContent from '../ChatContent'
import { useSpring, animated } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'

const Model = (props) => {
  const group = useRef()
  const maskRef = useRef()
  const { portal } = props
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf',
  )
  const [pointer] = useState(() => new THREE.Vector3())

  const stencil = useMask(1, true)
  useLayoutEffect(() => {
    Object.values(nodes).forEach(
      (node) => node.material && node.name === 'SCREEN' && Object.assign(node.material, stencil),
    )
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.15, 0.1)
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (0.5 + Math.sin(t / 2)) / 2, 0.1)
  })
  return (
    <group ref={group} {...props} dispose={null} position={[0, 0.5, 0]} onPointerMove={(e) => pointer.copy(e.point)}>
      <group scale={1.7}>
        <mesh geometry={nodes.Circle038.geometry} material={nodes.Circle038.material} />
        <mesh geometry={nodes.Circle038_1.geometry} material={materials['Front.001']} />
        <mesh geometry={nodes.Circle038_2.geometry} material={nodes.Circle038_2.material} />
        <mesh geometry={nodes.Circle038_3.geometry} material={materials['BackGrey.001']} />
        <mesh geometry={nodes.Circle038_4.geometry} material={materials['Rubber.001']} />
        <mesh
          geometry={nodes.AntennaLineTop001.geometry}
          material={nodes.AntennaLineTop001.material}
          position={[0, 0.02, 0]}
        />
        <mesh
          geometry={nodes.AntennaLineBottom001.geometry}
          material={nodes.AntennaLineBottom001.material}
          position={[0, -2.68, 0]}
        />
        <mesh
          geometry={nodes.AppleLogo001.geometry}
          material={materials['AppleLogo.001']}
          position={[0.17, 0.52, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraBottomLens001.geometry}
          material={nodes.BackCameraBottomLens001.material}
          position={[0.7, 0.88, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraP1001.geometry}
          material={materials['Black.015']}
          position={[0.7, 1.03, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={nodes.BackCameraBottomGreyRing001.material}
          position={[0.7, 0.88, -0.09]}
        />
        <mesh
          geometry={nodes.FlashBG001.geometry}
          material={materials['PinkFlash.002']}
          position={[0.71, 1.03, -0.09]}
        />
        <mesh
          geometry={nodes.FrontCameraContainer001.geometry}
          material={materials['FrontCameraBlack.002']}
          position={[0.34, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.BackCameraTopLens001.geometry}
          material={nodes.BackCameraTopLens001.material}
          position={[0.7, 1.18, -0.08]}
        />
        <mesh
          geometry={nodes.CameraBump001.geometry}
          material={nodes.CameraBump001.material}
          position={[0.7, 1.04, -0.08]}
        />
        <mesh
          geometry={nodes.FrontSpeakerBG001.geometry}
          material={materials['FrontSpeaker.001']}
          position={[0.16, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.BackCameraTopGreyRing001.geometry}
          material={nodes.BackCameraTopGreyRing001.material}
          position={[0.7, 1.18, -0.09]}
        />
        <mesh
          geometry={nodes.MuteSwitch001.geometry}
          material={nodes.MuteSwitch001.material}
          position={[-0.65, 0.92, 0.01]}
        />
        <group position={[0.98, -0.04, 0]}>
          <mesh geometry={nodes.Circle031.geometry} material={materials['Black.014']} />
          <mesh geometry={nodes.Circle031_1.geometry} material={nodes.Circle031_1.material} />
        </group>
        <mesh
          geometry={nodes.iPhoneLogo001.geometry}
          material={materials['iPhoneLogo.001']}
          position={[0.2, -1.18, -0.08]}
        />
        <group position={[0.97, 0.56, 0]}>
          <mesh geometry={nodes.Circle032.geometry} material={nodes.Circle032.material} />
          <mesh geometry={nodes.Circle032_1.geometry} material={nodes.Circle032_1.material} />
        </group>
        <mesh
          geometry={nodes.VolumeButtons001.geometry}
          material={nodes.VolumeButtons001.material}
          position={[-0.66, 0.21, 0]}
        />

        <mesh geometry={nodes.SCREEN.geometry}>
          <MeshReflectorMaterial mirror={0.95} attach='material' color={'#bebebe'} />
          <Mask ref={maskRef} id={1} position-z={0.085} colorWrite={false} depthWrite={false} castShadow receiveShadow>
            <Html
              center
              className='content-embed'
              wrapperClass='screen-container'
              portal={portal}
              position={[0.168, -0.22, 0]}
              transform
              scale={0.1}
              material={<meshPhysicalMaterial side={THREE.FrontSide} />}
              occlude
            >
              <div className={`screen-container chatContent-enter-active`}>
                <ChatContent />
              </div>
            </Html>
          </Mask>
        </mesh>
      </group>
    </group>
  )
}

export default Model
