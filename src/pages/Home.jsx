import React, { Suspense, useState } from 'react'
import { OrbitControls, Plane, Stars, Fisheye, Environment, Lightformer} from '@react-three/drei';
import { Canvas } from '@react-three/fiber'

import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, GodRays} from '@react-three/postprocessing'
import Loader from '../components/Loader'
import House from '../models/House'
import Sky from '../models/Sky'
import SeagullFly from '../models/Seagull'
import StorkFly from '../models/srorkFly'
import Island from '../models/Island'


const Home = () => {
  const [rotating, setRotating] =useState(false)

  const adjustHouseForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -50];
    let rotation = [0.2, -1, -0]
    if (window.innerWidth < 768 ) {
      screenScale = [3, 3, 3];
    }else{
      screenScale = [3.5, 3.5, 3.5];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustStorkForScreenSize=()=>{
    let screenScale = [0.5, 0.5, 0.5]
    let screenPosition = [0, 2, -15]
    let storkRotation = [0.1, -1.5, 0]
    if(window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3]
    } else {
      screenScale = [0.6, 0.6, 0.6]
      screenPosition=[0, 2, -5]
    }
    return [screenScale, screenPosition, storkRotation]
  }
    const [houseScale, housePosition, rotation] = adjustHouseForScreenSize();
    const [storkScale, storkPosition, storkRotation] = adjustStorkForScreenSize();

  

  return (
    <section className='w-full h-screen relative'>
      <Canvas className={`w-full h-screen bg-transparent ${rotating ? 'cursor-grabbing' : ''}`}
      camera={{near: 0.1, far: 10000 }}
      shadows
      style={{backgroundColor: "#ffeead"}}
      >
        <Environment preset="sunset"
        blur={0.1}>
        </Environment>
        <Suspense fallback={<Loader/>}>
          <directionalLight 
          position={[-10,13,10]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={500}/>
          {/* <directionalLight position={[0,10,10]} 
          intensity={4} 
          castShadow/> */}
          <ambientLight intensity={1}/>
          {/* <hemisphereLight
          skyColor={0xFFA500} 
          groundColor='#000000'
          intensity={1}/>  */}
          <Sky 
          scale={[0.9, 0.9, 0.9]}
          position={[0, 0, -500]}
          rotating={rotating}
          />
          <StorkFly 
          rotating={rotating}
          position={storkPosition}
          scale={storkScale}
          rotation={storkRotation}
          receieveShadow
          />
          {/* <SeagullFly 
          rotation={[3, 2.1, 4]} 
          scale={[0.5, 0.5, 0.5]} 
          position={[0,10,-30]}
          rotating={rotating}
          /> */}
          {/* <Island castShadow receiveShadow rotation={[0.3,0,0]} scale={[0.1, 0.1, 0.1]}/> */}
          {/* <Plane args={[40, 40]} rotation-x={-Math.PI / 2} position-y={-1} castShadow receiveShadow /> */}
          {/* <OrbitControls/> */}
          <House
          receiveShadow
          rotating={rotating}
          setRotating={setRotating}
          position = {housePosition}
          scale = {houseScale}
          rotation={rotation}
          />
          <EffectComposer>
            <DepthOfField
              focusDistance={0} // where to focus
              focalLength={0.012} // focal length
              bokehScale={4} // bokeh size
            />
            <Bloom
              intensity={0.2} // The bloom intensity.
              blurPass={undefined} // A blur pass.
              luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
              mipmapBlur={false} // Enables or disables mipmap blur.
            />
          </EffectComposer>
          
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
