import React, { useRef, useEffect, useState } from "react";
import { meshBounds, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import {Clock} from 'three'
import BalloonScene from '../assets/air_balloon.glb'


const Balloon = ({...props}) => {
    const {nodes, materials, scene, animations} = useGLTF(BalloonScene)
    const balloonRef = useRef()
    const clock = new Clock()
    const [click, setClick] = useState(false)

    const {camera} = useThree()

    const [hovered, setHovered] = useState(false)
    const meshRef = useRef()
    
    const flyingAnimation = (balloonRef) => {
        const amplitude = 0.2
        const frequency = 0.3

        if(balloonRef.current) {
        const posY = Math.sin(frequency * clock.getElapsedTime())
        balloonRef.current.position.y = (posY - 7 ) * amplitude
        balloonRef.current.rotation.y = (posY + 5 ) * amplitude
        // balloonRef.current.position.z = 0
        // console.log(balloonRef.current.position.y)
    }
    }

    const handleClick = (e) => {
        const mouseX = e.clientX
        // console.log('clicked')
        // const result = mouseX - balloonRef.current.position.x
        // console.log(`${mouseX} - ${balloonRef.current.position.x} = ${result}`)
        // balloonRef.current.position.x += balloonRef.current.position.x + 0.1
        // console.log(balloonRef.current.position.x - mouseX) % 2
    }
      
    useFrame(({raycaster, mouse})=>{
        flyingAnimation(balloonRef)
        // raycaster.setFromCamera(mouse, camera);
        // const intersects = raycaster.intersectObject(balloonRef.current)
        // setHovered(intersects.length > 0)
        })
        

    useFrame(()=>{
        if (hovered){
            console.log(hovered)
        }   
    })
    
    useEffect(()=>{
        document.addEventListener('mousedown', handleClick)
        return ()=>{
            document.removeEventListener('mousedown', handleClick)
        }
    })
    

  return (
    // <a.group {...props} ref={balloonRef}
    //     onPointerOver={()=>setHovered(true)}
    //     onPointerOut={()=>setHovered(false)} castShadow receiveShadow>
    //     <primitive object={scene} ref={meshRef}
    //     />
    // </a.group>
    <a.group {...props} ref={balloonRef} castShadow receiveShadow>
        <primitive object={scene}
        />
    </a.group>
  )
}

export default Balloon
