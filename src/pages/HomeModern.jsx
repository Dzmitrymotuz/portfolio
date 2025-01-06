import React from 'react'
import { useState, useEffect } from 'react'
import HackerEffect from '../components/HackerEffect'
import { project_files } from '../constants/ProjectFiles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import {faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import ImageSlider from '../components/ImageSlider'

 
 const HomeModern = () => {
  console.log(project_files)
  // console.log(RegularIcons)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectFiles, setProjectFiles] = useState(project_files)

  const clickedLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(project_files.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }
  const clickedRight = () => {
    if (currentIndex === project_files.length -1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

   return (
    <div
    className='bg-[rgb(6,11,25)] flex flex-col h-[100v] m-0 overflow-hidden text-white '
    style={{ fontFamily: '"Roboto Mono", sans-serif' }}
    > 
      <nav className='text-[#676e87] flex gap-2 w-[100%] box-border p-2 decoration-0 justify-center text-center border-b-2 border-indigo-900'> 
        <div 
        id='logo'
        className='nav-section basis-1/2 text-left '>
          <a>logo</a>
        </div>
        <div 
        id='nav-link'
        className='nav-section basis-1/2'>
          link
        </div>
        <div 
        id='social'
        className='nav-section basis-1/4'>
          social
        </div>
        <div 
        id='contact'
        className='nav-section basis-1/4'>
          contact
        </div>
        
      </nav>
      <div className='main flex-grow h-[100vh]'> 
        <article className='grid h-[100%] grid-cols-[2fr_1fr] grid-rows-[2fr_1fr]'>
          <div>
          {projectFiles[currentIndex].images ?
            <ImageSlider slides={projectFiles[currentIndex].images}/> : null}
          </div>
          <div className='p-2 transition-linear duration-500'> 
            {projectFiles[currentIndex].description}
          </div>
          <div className='p-2 text-xl'>
            <HackerEffect text={projectFiles[currentIndex].title}/>
          </div>
          <div className='text-[#676e87] flex flex-row p-2 items-center justify-center gap-5'>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} size='3x' onClick={clickedLeft}
            className='opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out hover:cursor-none '/>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size='3x' onClick={clickedRight}
            className='opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out hover:cursor-none'/>
          </div>
        </article>
      </div>
    </div>
   )
 }
 
 export default HomeModern