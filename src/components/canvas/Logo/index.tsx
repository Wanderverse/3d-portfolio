// 'use client'
// import * as THREE from 'three'
// import { useEffect, useRef, useState } from 'react'
// import { useFrame, useThree } from '@react-three/fiber'
// import { MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
// import { Geometry, Base, Subtraction } from '@react-three/csg'
// import { useRouter } from 'next/navigation'
// import useSpline from '@splinetool/r3f-spline'

// function Logo({ route = '/chat', cutterScale = 0.85, cutterPos = [0, 0, 0], setIsNavigating, isNavigating, ...props }) {
//   const { nodes, materials } = useSpline('https://prod.spline.design/kg7ufWdVbqlqpwxE/scene.splinecode')
//   const [transitionStart, setTransitionStart] = useState(false)
//   const [hovered, hover] = useState(false)
//   const router = useRouter()
//   const sphereRef = useRef(null)
//   const portalRef = useRef(null)
//   const sphereTargetScale = useRef(1) // non-hovered scale

//   const { size } = useThree() // this hook gives you access to the state of the canvas
//   const width = size.width

//   useEffect(() => {
//     if (sphereRef.current) {
//       if (width <= 767) {
//         sphereRef.current.position.set(0, -1, 0)
//         portalRef.current && portalRef.current.position.set(0, 0, -2)
//       } else if (width > 767) {
//         sphereRef.current.position.set(0, 0, 0)
//       }
//     }
//   }, [width])

//   useFrame((state, delta) => {
//     const { clock } = state
//     const time = clock.getElapsedTime() % 10 // Repeat every 10 seconds
//     const easedTime = Math.sin((time / 10) * Math.PI) // Ease in and out

//     if (sphereRef.current) {
//       sphereRef.current.rotation.y = (easedTime / 2) * Math.PI * 2
//       sphereRef.current.rotation.z = (easedTime / 4) * Math.PI * 2

//       // Interpolate the scale of the sphere
//       const currentScale = sphereRef.current.scale.x
//       const targetScale = sphereTargetScale.current
//       const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
//       sphereRef.current.scale.set(newScale, newScale, newScale)
//     }
//   })

//   useFrame((state, delta) => {
//     if (transitionStart && sphereRef.current) {
//       // Scale the sphere down to 0
//       const currentScale = sphereRef.current.scale.x
//       let targetScale = 0 // Scale down to 0
//       const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
//       sphereRef.current.scale.set(newScale, newScale, newScale)

//       if (newScale < 0.55) {
//         handleRouting()
//       }
//     }
//   })

//   const handleRouting = () => {
//     setIsNavigating(false)
//     setTransitionStart(false)
//     router.push(route)
//   }

//   return (
//     // <Caustics color='tran#ffffff' lightSource={[5, 5, -10]} worldRadius={0.6} ior={1.2} intensity={0.2}>
//     <group {...props}>
//       <mesh
//         name='Sphere'
//         geometry={nodes.Sphere.geometry}
//         castShadow
//         receiveShadow
//         scale={0}
//         onClick={() => {
//           setTransitionStart(true)
//           setIsNavigating(true)
//         }}
//         onPointerOver={() => {
//           if (!transitionStart) {
//             hover(true)
//           }
//         }}
//         onPointerOut={() => {
//           if (!transitionStart) {
//             hover(false)
//           }
//         }}
//         ref={sphereRef}
//       >
//         <Geometry>
//           <Base geometry={nodes.Sphere.geometry} />
//           <Subtraction scale={cutterScale}>
//             <sphereGeometry />
//           </Subtraction>
//         </Geometry>
//         <MeshTransmissionMaterial
//           temporalDistortion={0.2}
//           distortion={20}
//           distortionScale={1}
//           color='#8844bf'
//           resolution={1024}
//           thickness={10}
//           backsideThickness={5}
//           backside={true}
//           roughness={0.2}
//           ior={0.95}
//           chromaticAberration={2}
//           transmission={hovered ? 1.6 : 1.3}
//         />
//       </mesh>
//     </group>
//   )
// }

// export default Logo

'use client'
import * as THREE from 'three'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { Geometry, Base, Subtraction } from '@react-three/csg'
import { useRouter } from 'next/navigation'
import useSpline from '@splinetool/r3f-spline'

function Logo({ route = '/chat', cutterScale = 0.85, setIsNavigating, ...props }) {
  const { nodes } = useSpline('https://prod.spline.design/kg7ufWdVbqlqpwxE/scene.splinecode')
  const [transitionStart, setTransitionStart] = useState(false)
  const [hovered, setHovered] = useState(false)
  const router = useRouter()
  const sphereRef = useRef(null)
  const sphereTargetScale = useRef(1) // non-hovered scale

  const { size } = useThree() // this hook gives you access to the state of the canvas
  const width = size.width

  // Create the geometry only once and reuse it
  const geometry = useMemo(
    () => (
      <Geometry>
        <Base geometry={nodes.Sphere.geometry} />
        <Subtraction scale={cutterScale}>
          <sphereGeometry />
        </Subtraction>
      </Geometry>
    ),
    [nodes, cutterScale],
  )

  // Create the material only once and reuse it
  const material = useMemo(
    () => (
      <MeshTransmissionMaterial
        temporalDistortion={0.2}
        distortion={20}
        distortionScale={1}
        color='#8844bf'
        resolution={1024}
        thickness={10}
        backsideThickness={5}
        backside={true}
        roughness={0.2}
        ior={0.95}
        chromaticAberration={2}
      />
    ),
    [],
  )

  useEffect(() => {
    const positionY = width <= 767 ? -1 : 0
    sphereRef.current && sphereRef.current.position.setY(positionY)
  }, [width])

  useFrame((state, delta) => {
    if (!sphereRef.current || !transitionStart) return

    // Scale the sphere down to 0
    const currentScale = sphereRef.current.scale.x
    let targetScale = 0 // Scale down to 0
    const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
    sphereRef.current.scale.set(newScale, newScale, newScale)

    if (newScale < 0.55) {
      handleRouting()
    }
  })

  useFrame((state, delta) => {
    const { clock } = state
    const time = clock.getElapsedTime() % 10 // Repeat every 10 seconds
    const easedTime = Math.sin((time / 10) * Math.PI) // Ease in and out

    if (sphereRef.current && !transitionStart) {
      sphereRef.current.rotation.y = (easedTime / 2) * Math.PI * 2
      sphereRef.current.rotation.z = (easedTime / 4) * Math.PI * 2

      // Interpolate the scale of the sphere
      const currentScale = sphereRef.current.scale.x
      const targetScale = sphereTargetScale.current
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta)
      sphereRef.current.scale.set(newScale, newScale, newScale)
    }
  })

  const handleRouting = () => {
    setIsNavigating(false)
    setTransitionStart(false)
    router.push(route)
  }

  const handleHover = (value) => {
    if (!transitionStart) {
      setHovered(value)
    }
  }

  return (
    <group {...props}>
      <mesh
        name='Sphere'
        geometry={nodes.Sphere.geometry}
        castShadow
        receiveShadow
        scale={0}
        onClick={() => {
          setTransitionStart(true)
          setIsNavigating(true)
        }}
        onPointerOver={() => handleHover(true)}
        onPointerOut={() => handleHover(false)}
        ref={sphereRef}
      >
        {geometry}
        <MeshTransmissionMaterial {...material.props} transmission={hovered ? 1.6 : 1.3} />
      </mesh>
    </group>
  )
}

export default Logo
