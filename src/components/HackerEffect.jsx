import React, { useEffect } from 'react'
import { useState } from 'react'

const HackerEffect = ({text}) => {
    const [displayedText, setDisplayedText ]= useState(text)
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const hackerEffect = () => {
        let iterations = 0
        const interval = setInterval(()=>{setDisplayedText(text.split('').map((char,index)=> {
            if (index < iterations) {
                return text[index]
            } 
             return  alphabet[Math.floor(Math.random() * 26)]  
            }
            
        ).join(''))
        iterations += 1/3
        if (iterations > text.length) {
            clearInterval(interval)}

    },30); 
    }
    useEffect(()=>{
        hackerEffect()
    },[text])

  return (
    <div
    className='text-indigo-200 text-7xl '
    style={{ fontFamily: '"Jersey 15", sans-serif' }}
    onMouseOver={hackerEffect}>{displayedText.toUpperCase()}</div>
  )
}

export default HackerEffect