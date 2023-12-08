import React from 'react'
import { Link } from 'react-router-dom'
import  { arrow }  from '../assets/icons'


const InfoBox = ({text, link, btnText}) => {
    return (<div className='info-box '>
        <p className="font-medium sm:text-x1 text-center text-[#ff6f69]">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            {/* <img src={arrow} alt='arrow' className='w-4 h-4 object-contain text-[#ff6f69]' style={{ fill: '#ff6f69' }}/> */}
        </Link>
    </div>)
}


const renderContent = {
    1: (
        <InfoBox 
        text='I do other stuff, too'
        link='/projects'
        btnText='Check it out!'/>
    ),
    2: (
        <InfoBox 
        text='If you are interested in a collab or just want to talk to me:'
        link='/contact'
        btnText="Let's connect!"/>
    ),
    3: (
        <InfoBox 
        text='Hello! My name is Dimitry, and welcome to my website!'
        link='/contact'
        btnText='Say Hello!'/>
    ),
    4: (
        <InfoBox 
        text='This web page was modeled and programmed by me'
        link='/about'
        btnText='Find out more'/>
    ),
}


const HomeInfo = ({stage, ...props}) => {
  return renderContent[stage]
}
export default HomeInfo;
