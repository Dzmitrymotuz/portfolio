import { useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

import skyScene from '../assets/Sky.glb'
import { useFrame } from '@react-three/fiber'

const Sky = ({rotating, ...props}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()
    const skyRotation=()=>{
      if(rotating){
        skyRef.current.rotation.y += 0.02 * Math.PI * 0.1
        // console.log(skyRef.current.rotation.y)
      }
    }
    useEffect(()=>{
      skyRotation()
    }, [])
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
