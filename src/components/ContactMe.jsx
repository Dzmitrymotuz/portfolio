import React from 'react'
import { Link } from 'react-router-dom'

const ContactMe = () => {
  return (
    <div className='m-auto p-auto flex flex-col pb-[10vh]'>
        <p className="font-medium sm:text-x1 text-center text-gray-400 font-poppins">Have a project in mind? Let's build something together!</p>
        <Link to='/contact' className='m-auto text-gray-100 font-semibold rounded-md p-2 font-poppins '>
            Contact me! 
        </Link>
    </div>
  )
}

export default ContactMe
