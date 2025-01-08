import React, { Suspense, useRef, useState } from 'react'
import { project_files } from '../constants/ProjectFiles'
import { Link } from 'react-router-dom'
import ContactMe from '../components/ContactMe';
import ImageSlider from '../components/ImageSlider'
import HackerEffect from '../components/HackerEffect';

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
    <section className='bg-[rgb(6,11,25)] m-0 text-gray-200 text-gray-400 flex justify-center border-t-2 border-[#141e3b] font-poppins'> 
      <div className='w-full md:w-[70%] lg:w-[50%] flex-col p-5 '>
        <div className={`border-r-2 border-r-[#141e3b] mb-10`}>
          <HackerEffect text='My Projects'/>
          <span className='animate-up font-light sm:text-x1 text-left tracking-tight'>
          I love going on coding adventures! Check out my projects to see where I've been. I've built cool websites and dived into tricky tech stuff. Each project has its own story.
          Feel free to peek at the code and try out the demos. Come along on these code adventures with me. Every bit of code is a step into something new.
          </span>
        </div>
        {project_files.map((project, index)=>(
          <div className=' flex flex-col items-top' key={project.title}>
            <div className='flex flex-row items-top border-t-2 border-r-2 border-[#141e3b]'>
            <h1 className=' head-text text-gray-200 border-[#141e3b]'>
              <HackerEffect text={project.title}/>
            </h1>
          </div>
          <div className='animate-up font-light sm:text-x1 text-left  tracking-tight'>
            {project.description}
          </div>
          <div className=' flex flex-row items-center justify-end'>
          <Link to={project.link} target='_blank' rel='noopener noreferrer' className='  text-[#676e87] hover:text-gray-300 transition-all ease-in delay-100' >See More</Link>
        </div>
          {project.images.length > 0 ? 
          <div className='image_slider items-center mb-7 w-auto
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
