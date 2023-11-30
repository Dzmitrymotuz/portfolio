import { useGLTF } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'

import skyScene from '../assets/Sky.glb'
import { useFrame } from '@react-three/fiber'

const Sky = ({rotating, ...props}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()
    const [idleRotation, setIdleRotation] = useState(0.0002)



    const skyRotation=()=>{
      if(!rotating){
        // skyRef.current.rotation.y += 0.02 * Math.PI * 0.1
        skyRef.current.rotation.y -= (5%2)*idleRotation
            if(skyRef.current.rotation.y < -100) {
              setIdleRotation(0)
              skyRef.current.rotation.y = 0
            }
      }
    }

    useFrame(()=>{
      skyRotation()
    })
  return (
    <mesh ref={skyRef} {...props}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky
