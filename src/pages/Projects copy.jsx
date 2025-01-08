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
  }
  const handleMouseLeave = () => {
    setTimeout(() => {
      setExpanded(false);
    }, 500)
  }

  return (
    <section className='relative mx-auto py-10 max-w-[70rem]'> 
      <div className=' flex flex-col items-start p-5 justify-start z-10 '>
        <div className={`animate-in-left project_layer w-90%`}>
        <h1 className='animate-down head-text text-[#505050]'>My <span className='red-gradient_text drop-shadow'>Projects</span></h1>
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
        {/* h-[768px] w-[1028px]  */}
          {project.images.length > 0 ? 
          <div className='image_slider items-center animate-up mb-7 w-auto
          h-[300px] 
          sm:h-[345px] 
          md:h-[400px] 
          lg:h-[500px] 
          xl:h-[600px] xl:w-[1028px] 
          '>
            <ImageSlider slides={project.images}/>
          </div> : ''}
        
        </div> 
      ))}
            <div className='w-full animate-in-left h-24 py-20 '><ContactMe/></div>
            <div className='h-20  w-10 pt-10' ></div>
      </div>
    </section>
  )
}

export default Projects
