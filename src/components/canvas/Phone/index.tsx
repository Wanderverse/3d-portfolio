/*
  Auto-generated by Spline
*/
'use client'
import useSpline from '@splinetool/r3f-spline'
import {
  AccumulativeShadows,
  Html,
  Mask,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  RandomizedLight,
} from '@react-three/drei'
import { useRef, useState } from 'react'
import Particles from '../Particles'
import SpaceDust from '../SpaceDust'
import { Bloom, ChromaticAberration, EffectComposer, Vignette } from '@react-three/postprocessing'

import * as THREE from 'three'

// import '@/helpers/shaders/materials/ScreenMaterial'
import ChatContent from '@/components/canvas/ChatContent'

export function Phone({ ...props }) {
  const maskRef = useRef()
  const { portal } = props
  const { nodes, materials } = useSpline('https://prod.spline.design/YM2fDeQNDT5-idms/scene.splinecode')
  return (
    <>
      <group {...props} dispose={null}>
        <group name='iPhone 14 Pro 2' position={[-0.01, 50.91, -400.85]} rotation={[-0.2, -0.2, 0]} scale={0.5}>
          <group name='Container Rotation' position={[0.1, 7.83, 4.12]} rotation={[0, 0, 0]} scale={1}>
            <group name='Dynamic Island' position={[-11.5, 252.79, 15.88]} scale={1}>
              <group name='Group' position={[11.58, -12.26, 1.28]} rotation={[0, 0, 0]} scale={1}>
                <mesh
                  name='Ellipse 2'
                  geometry={nodes['Ellipse 2'].geometry}
                  material={materials['Ellipse 2 Material']}
                  castShadow
                  receiveShadow
                  position={[27.83, 0, -0.35]}
                />
                <mesh
                  name='Ellipse'
                  geometry={nodes.Ellipse.geometry}
                  material={materials['Ellipse Material']}
                  castShadow
                  receiveShadow
                  position={[27.83, 0, -0.81]}
                />
                <mesh
                  name='Rectangle'
                  geometry={nodes.Rectangle.geometry}
                  material={materials['Rectangle Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, -1.07]}
                />
              </group>
              <mesh
                name='Rectangle 5'
                geometry={nodes['Rectangle 5'].geometry}
                material={materials['Rectangle 5 Material']}
                castShadow
                receiveShadow
                position={[11.5, 8.79, -0.01]}
              />
            </group>
            <group name='Connectors' position={[0, 0, 0]} scale={1}>
              <mesh
                name='Rectangle 4'
                geometry={nodes['Rectangle 4'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[76.09, 137.8, 0]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name='Rectangle 3'
                geometry={nodes['Rectangle 3'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-62.45, -137.8, 0]}
                rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name='Rectangle 2'
                geometry={nodes['Rectangle 2'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[0, -215.43, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Rectangle1'
                geometry={nodes.Rectangle1.geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[0, 210.74, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
            <group name='Bottom Details' position={[7.82, -269.08, 0]} scale={1}>
              <mesh
                name='Ellipse 6'
                geometry={nodes['Ellipse 6'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-35.18, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Ellipse 5'
                geometry={nodes['Ellipse 5'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[59.18, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Ellipse 61'
                geometry={nodes['Ellipse 61'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-51.18, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Ellipse 4'
                geometry={nodes['Ellipse 4'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[51.18, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Ellipse 3'
                geometry={nodes['Ellipse 3'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[43.18, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Ellipse 62'
                geometry={nodes['Ellipse 62'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-59.18, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Ellipse 21'
                geometry={nodes['Ellipse 21'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[35.18, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Ellipse1'
                geometry={nodes.Ellipse1.geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[20.18, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Rectangle 21'
                geometry={nodes['Rectangle 21'].geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-7.82, -0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
              <mesh
                name='Rectangle2'
                geometry={nodes.Rectangle2.geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[-7.82, 0.08, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
            <group
              name='Logo'
              position={[26.33, 59.32, -14.8]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.07, 0.07, 0]}
            >
              <mesh
                name='Untitled'
                geometry={nodes.Untitled.geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[181, -238, 0]}
              />
              <mesh
                name='Untitled1'
                geometry={nodes.Untitled1.geometry}
                material={materials['Pink Items']}
                castShadow
                receiveShadow
                position={[423, -1, 0.01]}
              />
            </group>
            <group name='Camera' position={[52.98, 191.1, -23.02]} scale={1.16}>
              <mesh
                name='Cube 2'
                geometry={nodes['Cube 2'].geometry}
                material={materials['camera hold inner']}
                castShadow
                receiveShadow
                position={[0.24, -2.53, -1.13]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.86}
              />
              <mesh
                name='Cube'
                geometry={nodes.Cube.geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[0.24, -2.53, -1.81]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.86}
              />
              <group name='Light' position={[-25.87, 36.93, -1.91]} rotation={[0, 0, 0]} scale={[0.94, 0.94, 0.85]}>
                <mesh
                  name='Ellipse2'
                  geometry={nodes.Ellipse2.geometry}
                  material={materials['Camera Lens 2 Inner']}
                  castShadow
                  receiveShadow
                  position={[0.13, 0.39, -2.25]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                  scale={[1, 1, 1.11]}
                />
                <mesh
                  name='Ellipse 22'
                  geometry={nodes['Ellipse 22'].geometry}
                  material={materials['Camera Lens 2']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.66]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={[0.91, 0.91, 1]}
                />
                <mesh
                  name='Ellipse3'
                  geometry={nodes.Ellipse3.geometry}
                  material={materials['Camera Lens 2']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.34]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={[0.91, 0.91, 1]}
                />
              </group>
              <mesh
                name='Ellipse 31'
                geometry={nodes['Ellipse 31'].geometry}
                material={materials['Ellipse 31 Material']}
                castShadow
                receiveShadow
                position={[-25.87, -41.02, -1.38]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[0.86, 0.86, 0.85]}
              />
              <group name='Cam2 2' position={[25.45, -30.01, -0.78]} rotation={[0, 0, 0]} scale={0.86}>
                <mesh
                  name='Ellipse 7'
                  geometry={nodes['Ellipse 7'].geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.93]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 63'
                  geometry={nodes['Ellipse 63'].geometry}
                  material={materials['Ellipse 63 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 10'
                  geometry={nodes['Ellipse 10'].geometry}
                  material={materials['glass lenses']}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, -2.07]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 51'
                  geometry={nodes['Ellipse 51'].geometry}
                  material={materials['Ellipse 51 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, 1.1]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 41'
                  geometry={nodes['Ellipse 41'].geometry}
                  material={materials['Ellipse 41 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.5, -0.19, 1.6]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 9'
                  geometry={nodes['Ellipse 9'].geometry}
                  material={materials['Ellipse 9 Material']}
                  castShadow
                  receiveShadow
                  position={[-3.5, 2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  name='Ellipse 8'
                  geometry={nodes['Ellipse 8'].geometry}
                  material={materials['Ellipse 8 Material']}
                  castShadow
                  receiveShadow
                  position={[1.5, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 32'
                  geometry={nodes['Ellipse 32'].geometry}
                  material={materials['Ellipse 32 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
              <group name='Cam2' position={[-25.3, -2.16, -0.78]} rotation={[0, 0, 0]} scale={0.86}>
                <mesh
                  name='Ellipse 71'
                  geometry={nodes['Ellipse 71'].geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.93]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 64'
                  geometry={nodes['Ellipse 64'].geometry}
                  material={materials['Ellipse 64 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 101'
                  geometry={nodes['Ellipse 101'].geometry}
                  material={materials['glass lenses']}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, -2.07]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 52'
                  geometry={nodes['Ellipse 52'].geometry}
                  material={materials['Ellipse 52 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, 1.1]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 42'
                  geometry={nodes['Ellipse 42'].geometry}
                  material={materials['Ellipse 42 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.5, -0.19, 1.6]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 91'
                  geometry={nodes['Ellipse 91'].geometry}
                  material={materials['Ellipse 91 Material']}
                  castShadow
                  receiveShadow
                  position={[-3.5, 2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  name='Ellipse 81'
                  geometry={nodes['Ellipse 81'].geometry}
                  material={materials['Ellipse 81 Material']}
                  castShadow
                  receiveShadow
                  position={[1.5, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 33'
                  geometry={nodes['Ellipse 33'].geometry}
                  material={materials['Ellipse 33 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
              <group name='Cam1' position={[26.18, 23.96, -0.78]} rotation={[0, 0, 0]} scale={0.86}>
                <mesh
                  name='Ellipse 72'
                  geometry={nodes['Ellipse 72'].geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.93]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 65'
                  geometry={nodes['Ellipse 65'].geometry}
                  material={materials['Ellipse 65 Material']}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 102'
                  geometry={nodes['Ellipse 102'].geometry}
                  material={materials['glass lenses']}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, -2.07]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 53'
                  geometry={nodes['Ellipse 53'].geometry}
                  material={materials['Ellipse 53 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.17, -0.12, 1.1]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 43'
                  geometry={nodes['Ellipse 43'].geometry}
                  material={materials['Ellipse 43 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.5, -0.19, 1.6]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 92'
                  geometry={nodes['Ellipse 92'].geometry}
                  material={materials['Ellipse 92 Material']}
                  castShadow
                  receiveShadow
                  position={[-3.5, 2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                  scale={0.5}
                />
                <mesh
                  name='Ellipse 82'
                  geometry={nodes['Ellipse 82'].geometry}
                  material={materials['Ellipse 82 Material']}
                  castShadow
                  receiveShadow
                  position={[1.5, -2, -2.32]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
                <mesh
                  name='Ellipse 34'
                  geometry={nodes['Ellipse 34'].geometry}
                  material={materials['Ellipse 34 Material']}
                  castShadow
                  receiveShadow
                  position={[-0.5, 0, 2.5]}
                  rotation={[-Math.PI, 0, Math.PI]}
                />
              </group>
            </group>
            <group name='Body-Screen' position={[10.63, 18.95, 0.83]} scale={[1.02, 1.02, 1.04]}>
              <mesh
                name='Screen'
                geometry={nodes.Screen.geometry}
                material={materials['Screen Material']}
                castShadow
                receiveShadow
                position={[-10.45, -18.61, 14.55]}
                scale={[0.98, 0.98, 0.96]}
              >
                <mesh>
                  <Mask
                    id={1}
                    colorWrite={false}
                    depthWrite={false}
                    material={materials['black.002']}
                    castShadow
                    receiveShadow
                    ref={maskRef}
                  >
                    <Html
                      wrapperClass='screen-container'
                      className='content-embed'
                      portal={portal}
                      position={[0, 0, 0]}
                      // rotation-x={-Math.PI / 2}
                      // rotation-z={Math.PI / 2}
                      transform
                      scale={20}
                      material={<meshPhysicalMaterial side={THREE.FrontSide} />}
                      // occlude='blending'
                    >
                      {/* <div className={`screen-container ${b1 ? 'chatContent-enter-active' : 'chatContent-enter'}`}> */}
                      <div className={`screen-container chatContent-enter-active`}>
                        <ChatContent />
                      </div>
                    </Html>
                  </Mask>
                </mesh>
              </mesh>
              <mesh
                name='Screen Border'
                geometry={nodes['Screen Border'].geometry}
                material={materials['Black Border']}
                castShadow
                receiveShadow
                position={[-10.45, -18.61, 14.39]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.08, 1.08, 1.06]}
              />

              <mesh
                name='Back Side'
                geometry={nodes['Back Side'].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[-10.04, -18.07, -9.56]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.08, 1.08, 1.06]}
              />
              <group name='Left Buttons' position={[-139.66, 74.64, 0.26]} scale={[0.98, 0.98, 0.96]}>
                <mesh
                  name='Ellipse4'
                  geometry={nodes.Ellipse4.geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[-0.02, -262.95, -0.09]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={1}
                />
                <mesh
                  name='Rectangle 9'
                  geometry={nodes['Rectangle 9'].geometry}
                  material={materials['Rectangle 9 Material']}
                  castShadow
                  receiveShadow
                  position={[0.77, 61.22, -0.26]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name='Rectangle 8'
                  geometry={nodes['Rectangle 8'].geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[-1.51, 61.24, 2.07]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name='Rectangle 7'
                  geometry={nodes['Rectangle 7'].geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[-1.51, 11.96, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name='Rectangle 11'
                  geometry={nodes['Rectangle 11'].geometry}
                  material={materials.Metal}
                  castShadow
                  receiveShadow
                  position={[0.24, -241.12, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name='Rectangle 10'
                  geometry={nodes['Rectangle 10'].geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[0.54, -241.12, 0]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name='Rectangle 51'
                  geometry={nodes['Rectangle 51'].geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[-1.51, -38.91, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
              </group>
              <group name='Right Buttons' position={[118.57, -3.06, 0.26]} scale={[0.98, 0.98, 0.96]}>
                <mesh
                  name='Button'
                  geometry={nodes.Button.geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[-0.25, -60.23, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
                <mesh
                  name='Button1'
                  geometry={nodes.Button1.geometry}
                  material={materials['Pink Items']}
                  castShadow
                  receiveShadow
                  position={[-1.53, 51.46, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={[1.04, 1.02, 1.02]}
                />
              </group>
              <mesh
                name='Metal Border'
                geometry={nodes['Metal Border'].geometry}
                material={materials.Metal}
                castShadow
                receiveShadow
                position={[-10.45, -18.61, 13.04]}
                rotation={[-Math.PI, 0, Math.PI]}
                scale={[1.08, 1.08, 1.06]}
              />
            </group>
          </group>
        </group>
      </group>
    </>
  )
}
export default function CameraScreen({ portal }) {
  const [isNavigating, setIsNavigating] = useState(false)

  return (
    <>
      <Particles count={10000} isNavigating={isNavigating} />
      <AccumulativeShadows temporal frames={100} scale={20} alphaTest={0.85} color='#925edc' colorBlend={2}>
        <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <Phone portal={portal} scale={[0.1, 0.1, 0.1]} />

      {/* <OrthographicCamera
        name='Camera 2'
        makeDefault={true}
        zoom={40}
        far={100000}
        near={-100000}
        up={[0, 1, 0]}
        position={[200.12, 1, 455.8]}
        rotation={[-0.14, 0.83, 0.1]}
      /> */}
      {/* <OrthographicCamera makeDefault={true} zoom={50} far={100000} near={-100000} position={[0, 0, 1000]} /> */}

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

      {/* <EffectComposer>
        <Bloom intensity={1} luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer> */}
      {/* <OrbitControls
        makeDefault
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        // minPolarAngle={Math.PI / 3}
        // maxPolarAngle={Math.PI / 3}
        // minAzimuthAngle={-Math.PI / 2}
        // maxAzimuthAngle={Math.PI / 2}
      /> */}
    </>
  )
}
