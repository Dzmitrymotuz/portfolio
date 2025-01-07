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
  console.log(BrandIcons)
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
    setModalOpen(true)
  }
   return (
    <div
    className='bg-[rgb(6,11,25)] flex flex-col h-[100v] m-0 overflow-hidden text-white '
    style={{ fontFamily: '"Roboto Mono", sans-serif' }}
    > 
    {modalOpen ? <Modal setModalOpen={()=>setModalOpen()}/> : null} 
      <nav className=' text-[#676e87] flex gap-2 w-[100%] box-border	 decoration-0 justify-center text-center border-b-2 border-[#141e3b]'> 
        <div 
        id='logo'
        className='nav-section basis-1/2 text-left border-l-2 border-[#141e3b] p-2 content-center'>
          <img src={logo} alt='logo' className='w-10 h-10 transform scale-x-[-1]'/>
        </div>
        <div 
        id='nav-link'
        className=' nav-section basis-1/2 border-l-2 border-[#141e3b] p-2 h-[8vh] content-center'>
          
        </div>
        <div 
        id='social'
        className='nav-section basis-1/4 border-l-2 border-[#141e3b] p-2 h-[8vh] content-center'>
        <NavLink to="https://www.instagram.com/newmoturbo/?hl=am-et" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon 
            icon={faInstagram} 
            className="w-5 mx-3 hover:text-[#49588c] transition-colors duration-300" 
          />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/dzmitrymotuz/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon 
            icon={faLinkedinIn} 
            className="w-5 mx-3 hover:text-[#49588c] transition-colors duration-300" 
          />
        </NavLink>
        </div>
        <div 
        id='contact'
        className='nav-section basis-1/4 border-l-2 border-[#141e3b] p-2 h-[8vh] content-center hover:cursor-pointer'
        onClick={()=>openModal()}>
          MENU
        </div>        
      </nav>
      <div className='main flex-grow h-[100vh]'> 
        <article className='grid h-[100%] grid-cols-[2fr_1fr] grid-rows-[2fr_1fr]'>
          <div>
          {projectFiles[currentIndex].images ?
            <ImageSlider slides={projectFiles[currentIndex].images}/> : null}
          </div>
          <div className='p-2 transition-linear duration-500 border-l-2 border-[#141e3b]'> 
            {projectFiles[currentIndex].description}
          </div>
          <div className='text-xl text-[#49588c] flex items-center justify-center text-7xl'>
            <HackerEffect text={projectFiles[currentIndex].title}/>
          </div>
          <div className='text-[#676e87] flex flex-row p-2 items-center justify-center gap-5 border-2 border-[#141e3b]'>
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