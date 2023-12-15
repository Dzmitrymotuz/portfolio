import React, { Suspense, useState } from 'react'
import { OrbitControls, Plane, Stars, Fisheye, Environment, Lightformer, ContactShadows, Sparkles} from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette, GodRays} from '@react-three/postprocessing'
import Loader from '../components/Loader'
import House from '../models/House'
import Sky from '../models/Sky'
import SeagullFly from '../models/Seagull'
import StorkFly from '../models/srorkFly'
import Island from '../models/Island'
import HomeInfo from '../components/HomeInfo';

let colors=['#ff6f69', '#ffcc5c', '#88d8b0']

const Home = () => {
  const [rotating, setRotating] =useState(false)
  const [currentStage, setCurrentStage] = useState(null)
  const [toggleInfo, setToggleInfo] = useState(false)
  const [vfx, setVfx] = useState(false)

  const togglePopups=()=>{
    setToggleInfo(!toggleInfo)
  }
  

  const getStageFromHouse=(data)=>{
    setCurrentStage(data)
  }

  const adjustHouseForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -50];
    let rotation = [0.2, -1, -0]
    if (window.innerWidth < 768 ) {
      screenScale = [3, 3, 3];
    }else{
      screenScale = [3.2, 3.2, 3.2];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustStorkForScreenSize=()=>{
    let screenScale = [0.5, 0.5, 0.5]
    let screenPosition = [0, 2, -8]
    let storkRotation = [0.1, -1.5, 0]
    if(window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5]
    } else {
      screenScale = [0.6, 0.6, 0.6]
      screenPosition=[0, 2, -5]
    }
    return [screenScale, screenPosition, storkRotation]
  }

  const adjustSkyForScreenSize =()=>{
    let screenscale = [0.9, 0.9, 0.9]
    let screenPosition = [0, 0, -500]
    if (window.innerWidth < 768) {
      screenscale = [0.9, 0.9, 0.9]
    }else if (window.innerWidth > 768) {
      screenscale = [1.1, 1.1, 1.1]
    }
    return [screenscale, screenPosition]
  }
    const [houseScale, housePosition, rotation] = adjustHouseForScreenSize();
    const [storkScale, storkPosition, storkRotation] = adjustStorkForScreenSize();
    const [skyScale, skyPosition] = adjustSkyForScreenSize();
  
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center '>
        {!toggleInfo && <HomeInfo stage={currentStage}></HomeInfo>}
      </div>
      <button className={`absolute bottom-5 z-10 right-2 w-20 h-15 rounded-lg ${!toggleInfo ? 'bg-white bg-opacity-70 text-[#96ceb4] text-opacity-60' : 'bg-white bg-opacity-10 text-[#ff6f69] text-opacity-80'}  items-center justify-center flex  text-sm hover:bg-opacity-100 hover:text-opacity-100 transition-all duration-500 ease-in-out`}
      onClick={togglePopups}>
        Toggle popups
      </button>
      <button className={`absolute bottom-20 z-10 right-2 w-20 h-15 rounded-lg bg-white bg-opacity-70 items-center justify-center flex ${!vfx ? 'text-[#96ceb4]' : 'text-[#ff6f69]'} text-opacity-60 text-sm hover:bg-opacity-100 hover:text-opacity-100 transition-all duration-500 ease-in-out`}
      onClick={()=>{setVfx(!vfx)}}>
        VFX
      </button>

      <Canvas className={`w-full h-screen bg-transparent ${rotating ? 'cursor-grabbing' : ''}`}
      camera={{near: 0.1, far: 10000 }}
      shadows
      >
        <Environment preset="sunset"
        blur={0.1}
        >
        </Environment>
        <Suspense fallback={<Loader/>}>
          <directionalLight 
          position={[-10,13,10]} 
          intensity={0}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={500}/>
          <ambientLight intensity={1}/>
          <Sky 
          scale={skyScale}
          position={skyPosition}
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
          getStageFromHouse={getStageFromHouse}
          />
          {!vfx && <EffectComposer>
            {/* <DepthOfField
              focusDistance={0} // where to focus
              focalLength={0.012} // focal length
              bokehScale={5} // bokeh size
            /> */}
            <Bloom
              intensity={0.2} // The bloom intensity.
              blurPass={undefined} // A blur pass.
              luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
              mipmapBlur={false} // Enables or disables mipmap blur.
            />
          </EffectComposer>}
          
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
