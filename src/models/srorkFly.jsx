import React, { useRef, useEffect } from 'react'
import storkFlyscene from '../assets/storkFly.glb'
import {a} from '@react-spring/three'
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';


const StorkFly = ({rotating, ...props}) => {
    const {scene, animations} = useGLTF(storkFlyscene)
    const { actions } = useAnimations(animations, scene)
    const storkRef = useRef()
    const frameCount = 200; // 10 frames up, 10 frames down
    const animationSpeed = 0.08;
    useEffect(()=>{
        actions['ArmatureAction.002'].play();
    })
    useFrame((state, delta) => {
        const progress = (state.clock.elapsedTime % (frameCount * animationSpeed)) / (frameCount * animationSpeed);
        const yPosition = Math.sin(progress * Math.PI) * 2; 
        // console.log(yPosition)
        storkRef.current.position.y = yPosition;
      
    });


  return (
    <mesh ref={storkRef} {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default StorkFly
