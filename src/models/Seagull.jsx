import React, { useEffect, useRef } from 'react'
import Seagull from '../assets/seagull.glb'
import {a} from '@react-spring/three'
import { useGLTF, useAnimations } from "@react-three/drei";

const SeagullFly = ({rotating, ...props}) => {
  const seagull = useRef();
  const { nodes, materials, scene,  animations } = useGLTF(Seagull);
  const { actions } = useAnimations(animations, seagull);
  useEffect(()=>{
    actions["ArmatureAction"].play()
  })
  return (
    <a.group ref={seagull} {...props}>
      <mesh {...props}>
        <primitive object={scene}/>
      </mesh>
      {/* <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          position={[-0.02, 0, -2.003]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Armature_7"
                position={[0, 0.55, -1.196]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Seagull_Base_Material}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Seagul_DarkEyeTail}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Seagull_Yellow}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Seagull_Red}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <group name="Segull_6" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group> */}
    </a.group>
  );
}

export default SeagullFly;
