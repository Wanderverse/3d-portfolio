import React, { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'

// Create a type for CommonProps
type CommonProps = {
  color?: string
  camera?: JSX.Element
}

export const Common: React.FC<CommonProps> = ({
  color,
  camera = <PerspectiveCamera makeDefault fov={80} position={[0, 0, 4]} />,
}) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={1} color={'#ba52ff'} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} intensity={1} color='#7700ff' />
    <pointLight distance={100} intensity={1} color='white' />
    {camera}
  </Suspense>
)

type ViewProps = {
  children?: React.ReactNode
  orbit?: boolean
  presentation?: boolean
  className?: string
}

const View = forwardRef<HTMLDivElement, ViewProps>(({ children, orbit, presentation, ...props }, ref) => {
  const localRef = useRef<HTMLDivElement>(null)
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
