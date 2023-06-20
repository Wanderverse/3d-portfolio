'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  PresentationControls,
  View as ViewImpl,
} from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

export const Common = ({ color, camera = <PerspectiveCamera makeDefault fov={80} position={[0, 0, 4]} /> }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={1} color={'#ba52ff'} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} intensity={1} color='#7700ff' />
    <pointLight distance={100} intensity={1} color='white' />
    {camera}
    {/* <OrbitControls makeDefault enableZoom={true} /> */}
  </Suspense>
)

const View = forwardRef(({ children, orbit, presentation, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {orbit && <OrbitControls makeDefault enableZoom={true} />}
          {children}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
