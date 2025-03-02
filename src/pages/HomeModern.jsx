import React from 'react'
import { useState} from 'react'
import HackerEffect from '../components/HackerEffect'
import { project_files } from '../constants/ProjectFiles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import ImageSlider from '../components/ImageSlider'
import { NavLink } from 'react-router-dom'


 
 const HomeModern = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectFiles, setProjectFiles] = useState(project_files)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
      setModalOpen(prevState=>!prevState)
    }
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
    className='bg-[rgb(6,11,25)] flex flex-col h-[100%] m-0 text-gray-200 ' 
    style={{ fontFamily: '"Roboto Mono", sans-serif' }}
    > 
      <div className='h-[90vh] '> 
        <article className='flex flex-col sm:grid h-[100%] sm:grid-cols-[2fr_1fr] sm:grid-rows-[2fr_1fr]'>
          <div className='h-[50vh] sm:h-auto'>
          {projectFiles[currentIndex].images ?
            <ImageSlider slides={projectFiles[currentIndex].images}/> : null}
          </div>
          <div className='bg-[rgb(6,11,25)] p-2 transition-linear duration-500 border-l-2 border-[#141e3b]'> 
            {projectFiles[currentIndex].description}
          </div>
          <div className='bg-[rgb(6,11,25)] text-xl text-[#49588c] flex items-center justify-center '>
            <NavLink to={projectFiles[currentIndex].link} target="_blank" rel="noopener noreferrer">
              <HackerEffect text={projectFiles[currentIndex].title}/>
            </NavLink> 
          </div>
          <div className='bg-[rgb(6,11,25)]  mb-5 sm:m-0 text-[#676e87] flex flex-row p-2 items-center justify-center gap-5 border-2 border-[#141e3b]'>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} size='3x' onClick={clickedLeft}
            className='opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out hover:cursor-none hover:-translate-x-2'/>
            <FontAwesomeIcon icon={faArrowAltCircleRight} size='3x' onClick={clickedRight}
            className='opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out hover:cursor-none hover:translate-x-2'/>
          </div>
        </article>
      </div>
    </div>
   )
 }
 
 export default HomeModern