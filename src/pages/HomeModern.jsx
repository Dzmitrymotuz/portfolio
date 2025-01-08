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
  const openModal = () => {
    setModalOpen(prevState=>!prevState)
  }
   return (
    <div
    className='bg-[rgb(6,11,25)] flex flex-col h-[100%] m-0 text-gray-200 ' 
    style={{ fontFamily: '"Roboto Mono", sans-serif' }}
    > 
      <nav className='text-[#676e87] h-[12vh] flex gap-2 w-[100%] box-border decoration-0 justify-center text-center border-b-2 border-[#141e3b]'> 
      {modalOpen ? <Modal setModalOpen={()=>setModalOpen(false)} modalOpen={modalOpen}/> : null}  
        <div 
        id='logo'
        className='z-[60] nav-section basis-1/2 text-left border-l-2 border-[#141e3b] p-2 content-center'>
          <img src={logo} alt='logo' className='w-10 h-10 transform scale-x-[-1]'/>
        </div> 
        <div 
        id='social'
        className='flex items-center sm:content-center sm:block basis-1/4 border-x-2 border-[#141e3b] p-2 '>
        <NavLink to="https://www.instagram.com/newmoturbo/?hl=am-et" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon 
            icon={faInstagram} 
            className="h-4 sm:h-6 mx-5 hover:text-[#49588c] transition-colors duration-300" 
          />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/dzmitrymotuz/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon 
            icon={faLinkedinIn} 
            className="h-4 sm:h-6 mx-5 hover:text-[#49588c] transition-colors duration-300" 
          />
        </NavLink>
        </div>
        <div 
        id='contact'
        className='z-[60] nav-section basis-1/4 p-2 content-center hover:cursor-pointer transition-colors duration-300' 
        onClick={()=>openModal()}>
          <span className=''>MENU</span>
          <div 
            className='flex flex-col items-center justify-center gap-1 transition-all duration-500 ease-in-out'>
            <div 
              className={`h-[1px] bg-[#676e87] transform transition-all duration-500 ease-in-out ${
                modalOpen ? 'rotate-45 -translate-y-[-5px] translate-x-[0px] w-4' : 'w-3 rotate-0 translate-y-0'
              }`} 
            />
            <div 
              className={` h-[1px] bg-[#676e87] transform transition-all duration-500 ease-in-out ${
                modalOpen ? '-rotate-45 -translate-y-[-0px] translate-x-[0px] w-4' : 'w-3 rotate-0 translate-y-0'
              }`} 
            />
          </div>
        </div>        
      </nav>
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