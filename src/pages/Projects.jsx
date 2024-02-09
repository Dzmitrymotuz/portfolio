import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Balloon from '../models/Balloon'
import { Environment, OrbitControls } from '@react-three/drei'
import { project_files } from '../constants/ProjectFiles'
import { Link } from 'react-router-dom'
import ContactMe from '../components/ContactMe';
import ImageSlider from '../components/ImageSlider'

const Projects = () => {
  const [state, setState] = useState([])

  let list = []
  const slides = project_files.map((project)=>{
    project.images.map((image)=>{
      list.push(image)
    })
  })
  // console.log(project_files[0].images)
  // console.log(list)

  const handleBallonPosition = () => {
    let universalPosition
    if(window.innerWidth<600){
      universalPosition = 2
    } else if(window.innerWidth<768){
      universalPosition = 3
    } else if(window.innerWidth<1200){
      universalPosition = 2.2
    } else if(window.innerWidth<1600){
      universalPosition = 3.2
    }else if(window.innerWidth<2068){
      universalPosition = 3.5
    }else if(window.innerWidth>2068){
      universalPosition = 4
    } else {
      universalPosition = 2
    }
    return universalPosition
  }

  const ballonPosition = handleBallonPosition()

  // DELETE that logic if not applicable
  const [expanded, setExpanded] = useState(false)
  const handleMouseEnter = () => {
    setExpanded(true);
    console.log('111')
  }
  const handleMouseLeave = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 500)
  }

  return (
    <section className='w-full relative bg-[#ffffff]'>
      <div>
        {/* NEW content
        <div className='animate-fade-in w-screen h-screen m-auto'>
          <ImageSlider slides={project_files[0].images}/>
        </div> */}
        
      </div>


      <div className='absolute h-screen flex flex-col items-start p-5 m-10 justify-start z-10 '>
        <div className={`animate-in-left project_layer w-90%`}>
        <h1 className='animate-down head-text text-[#505050]'>My <span className='red-gradient_text font-semibold drop-shadow'>Projects</span></h1>
          <span className='animate-fade-in font-light sm:text-x1 text-left text-black font-poppins tracking-tight'>
          I love going on coding adventures! Check out my projects to see where I've been. I've built cool websites and dived into tricky tech stuff. Each project has its own story.
          Feel free to peek at the code and try out the demos. Come along on these code adventures with me. Every bit of code is a step into something new.
          </span>
        </div>
        {project_files.map((project, index)=>(
          <div className='animate-in-right  project_layer flex flex-col items-top' key={project.title}>
            <div className='flex flex-row items-top '>
            <h1 className='animate-down head-text text-[#505050] red-gradient_text'>{project.title}</h1>
          </div>
          <div className=' font-light sm:text-x1 text-left text-black font-poppins tracking-tight'>
            {project.description}
          </div>
          <div className='animate-in-right flex flex-row items-center justify-end'>
          <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semibold red-gradient_text' style={{ 'zIndex': '12'}}>See More</Link>
        </div>
          {project.images.length > 0 ? 
          <div className='animate-up h-[50dvh] w-full mb-5'>
            <ImageSlider slides={project.images}/>
          </div> : ''}
        
        </div> 
      ))}
            <div className='w-full h-24 p-20'></div>
            <ContactMe/>
      </div>

      
      {/* <Canvas className='w-full h-screen'
      style={{position: 'fixed', pointerEvents: 'none'}}
      camera={{fov: 35, position: [0,0,10]}}
      >
        <Suspense>
        <Environment preset='city'/>
          <ambientLight
            intensity={1.5}
            />
            <directionalLight
            position={[20, -10, -10]}
            intensity={3}
            color='white'
            />
        <Balloon 
        onPointerEnter={ handleBallonPosition}
        // onPointerEnter={(e) => setState(true)}
        // onPointerLeave={(e) => setState(false)}
        position={[ballonPosition,0,1]}
        rotation={[0,0,0]} />
        {state && <OrbitControls/>}
        </Suspense>
      </Canvas> */}
    </section>
  )
}

export default Projects
