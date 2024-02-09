import React, {Suspense, useEffect} from 'react'
import Balloon from '../models/Balloon'
import { Environment, OrbitControls} from '@react-three/drei'
import { Canvas,  } from '@react-three/fiber'
import { Link } from 'react-router-dom'



const Main404 = ({setShowNavBar}) => {
    
    useEffect(()=>{
        setShowNavBar(false)
    }, [])
  return (
        <div>
            <div className='flex justify-center items-center h-screen fixed w-screen transparent-bg text-[70em] font-poppins text-[#fffece]'>   
                404
            </div> 
            <Canvas className='w-full h-screen z-20'
                style={{position: 'fixed', pointerEvents: 'none'}}
                camera={{fov: 35, position: [0,0,10]}}
                >
            <Environment preset='city'/>
            <ambientLight
                intensity={1.5}
                />
                <directionalLight
                position={[20, -10, -10]}
                intensity={3}
                color='white'
            />
            <Suspense>
                <Balloon 
                style={{position: 'fixed', pointerEvents: 'none'}}
                position={[0,0,2]}
                rotation={[0,0,0]}/>
            </Suspense>
            <OrbitControls/>
            </Canvas>
            <div className='flex flex-col z-20 fixed  h-screen w-screen font-poppins text-[20px] justify-center items-center'>
                {/* <span className='flex flex-col justify-center items-center tracking-tighter'>
                    <span className='mt-[-50%] text-[250px] opacity-70 text-[#f44a4a]'>Oops!</span>
                    <div className='z-10'>
                        <span className='text-[80px] opacity-100 text-[#369b54]'>Those pesky balloons!</span>
                    </div>
                    <span className='text-[40px] opacity-70 text-[#f44a4a]'> They took this page away!</span>
                    <br/>  */}
                    <span className='text-[40px] mb-[-60px] opacity-100 text-[#905151]'> Oops! This page does not exist</span>
                    <Link to='/' onClick={()=>setShowNavBar(true)}>
                        <span className='text-[150px] opacity-100 text-[#369b54] animate-pulse  hover:text-[#ffb452]'>Go Back</span>
                    </Link>
                {/* </span> */}
            </div>
        </div>
    
    
  )
}

export default Main404