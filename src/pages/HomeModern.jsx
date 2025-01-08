import React from 'react'
import { useState, useEffect } from 'react'
import HackerEffect from '../components/HackerEffect'
import { project_files } from '../constants/ProjectFiles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ImageSlider from '../components/ImageSlider'
import logo from '../../public/dm.png'
import Modal from './Modal'
import { NavLink } from 'react-router-dom'


 
 const HomeModern = () => {
  // console.log(project_files)
  // console.log(RegularIcons)
  // console.log(BrandIcons)
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
            <HackerEffect text={projectFiles[currentIndex].title}/>
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