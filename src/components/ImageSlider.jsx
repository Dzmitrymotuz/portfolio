import React, {useState, useEffect} from 'react'
import { project_files } from '../constants/ProjectFiles'


const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

  return (
    <div className='h-[100%] relative'>
        <div className='absolute top-[50%] left-[0px] text-[45px] text-[#ff9068] z-10 opacity-30 hover:opacity-100 cursor-pointer transition-linear duration-300'
        onClick={goToPrevious}
        >
        〈    
        </div>
        <div className='absolute  top-[50%] right-[0px] text-[45px] text-[#ff9068] z-10 opacity-30 hover:opacity-100 cursor-pointer transition-linear duration-300'
            onClick={goToNext}
        >   
         〉
        </div>
        <div 
        className=' bg-cover items-center h-[100%] w-[100%] transition-linear duration-500'    
        style={{backgroundImage: `url(${slides[currentIndex].name})`}}>
        </div>
        <div className='flex flex-row justify-center'>
            {slides.map((slide, index) => (
                <div key={index} 
                className='mr-[3px] opacity-30 hover:opacity-100 cursor-pointer transition-linear duration-300 text-[#ff9068] text-[20px] '
                onClick={()=>goToSlide(index)}
                >
                    {/* ● */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider
