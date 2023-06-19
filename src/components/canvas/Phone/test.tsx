'use client'
import * as THREE from 'three'
import React, { useLayoutEffect, useRef, useState } from 'react'
import {
  Html,
  Mask,
  MeshReflectorMaterial,
  MeshRefractionMaterial,
  OrbitControls,
  OrthographicCamera,
  useGLTF,
  useMask,
  Mesh,
} from '@react-three/drei'
import ChatContent from '../ChatContent'
import Particles from '../Particles'
import { useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const Model = (props) => {
  const group = useRef()
  const maskRef = useRef()
  const { portal } = props
  const { nodes, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf',
  )
  const v = new THREE.Vector3()

  const stencil = useMask(1, true)
  useLayoutEffect(() => {
    Object.values(nodes).forEach(
      (node) => node.material && node.name === 'SCREEN' && Object.assign(node.material, stencil),
    )
  }, [])

  return (
    <group ref={group} {...props} dispose={null} scale={1}>
      <group position={[0, 0, 0]}>
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
        <group>
          <mesh geometry={nodes.SCREEN.geometry}>
            <MeshReflectorMaterial mirror={0.9} attach='material' color={'#bebebe'} />
            <Mask
              ref={maskRef}
              id={1}
              position-z={0.081}
              colorWrite={false}
              depthWrite={false}
              castShadow
              receiveShadow
            >
              <Html
                center
                className='content-embed'
                wrapperClass='screen-container'
                portal={portal}
                position={[0.168, -0.22, 0]}
                transform
                scale={0.1}
                zIndexRange={[-1, 0]}
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
    </group>
  )
}

export default function Phone({ portal }) {
  const [isNavigating, setIsNavigating] = useState(false)

  return (
    <>
      <Model portal={portal} />
      <Particles count={10000} isNavigating={isNavigating} />
      <group name='Lights' position={[60.22, 654.15, 57.6]}>
        <spotLight
          name='Spot Light'
          castShadow
          intensity={3.83}
          angle={0.28}
          penumbra={0.6}
          decay={2.6}
          distance={2116}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-fov={119.99999999999999}
          shadow-camera-near={100}
          shadow-camera-far={100000}
          position={[-89.57, 255.61, -701.63]}
        />
        <directionalLight
          name='Directional Light 2'
          castShadow
          intensity={0.85}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-779.8075}
          shadow-camera-right={779.8075}
          shadow-camera-top={779.8075}
          shadow-camera-bottom={-779.8075}
          color='#fefefe'
          position={[138.76, -184.17, 415.92]}
        />
      </group>
      {/* <color attach='background' args={['#28252d']} />
      <color attach='background' args={['#e5e5e5']} /> */}

      {/* <fog attach='fog' args={['#413f45', 20, 25]} /> */}
      {/* <directionalLight position={[10, -10, 10]} intensity={0.6} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} /> */}
      {/* <Phone portal={portal} position={[1.5, -1.4, 0]} rotation={[0, -Math.PI / 2, 0]} /> */}

      <EffectComposer>
        <Bloom intensity={0.2} luminanceThreshold={0} luminanceSmoothing={0.5} height={1000} />
      </EffectComposer>
      <OrbitControls
        makeDefault
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        // minPolarAngle={Math.PI / 3}
        // maxPolarAngle={Math.PI / 3}
        // minAzimuthAngle={-Math.PI / 2}
        // maxAzimuthAngle={Math.PI / 2}
      />
    </>
  )
}
