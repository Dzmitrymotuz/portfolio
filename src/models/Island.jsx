import React, { useRef, useEffect, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import islandScene from "../assets/island.glb"
import {Box3} from 'three'



const Island = ({...props}) => {

const IslandRef = useRef()
const [flag, setFlag] = useState(false)
const {nodes, materials, scene, animations} = useGLTF(islandScene)
const [box, setBox] = useState()


const handleGravity=()=>{
  // e.stopPropagation()
  // e.preventDefault()
  if(flag){
    // IslandRef.current.position.y -= 0.1;
    console.log(IslandRef.current.rotation.y)
    if(IslandRef.current.rotation.y < - 20){
      IslandRef.current.rotation.y = 0;
      setFlag(false)
    }
    if (IslandRef.current.position.y < -5){
      IslandRef.current.position.y = -5
  }
}
}

if(IslandRef.current){
const width = box.max.x - box.min.x
}

const handleClick = () => {
  setFlag(true)
}

useEffect(()=>{
  const boundingBox = new Box3().setFromObject(IslandRef.current)
  setBox(boundingBox)
    document.addEventListener('pointerdown', handleClick)
  return ()=>{
    document.removeEventListener('pointerdown', handleClick)
}
}, [IslandRef.current])

useFrame(()=>{
  handleGravity();
})

  return (
    <a.group {...props} ref={IslandRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

export default Island;
