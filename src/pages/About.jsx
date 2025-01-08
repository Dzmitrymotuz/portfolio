import React from 'react'
import { experiences, skills } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workExperiences } from '../constants/ProjectFiles';
import ContactMe from '../components/ContactMe';
import { useState } from 'react';




const About = () => {
  return(
      <div className='bg-[rgb(6,11,25)] m-0 text-gray-200'>  
      <h1 className=' head-text m-5 mt-0 border-t-2 border-[#141e3b]'>
        Hello, I'm <span className='text-[#c304d1] drop-shadow'>Dimitry</span> 
      </h1> 
      <div className='animate-in-left  flex flex-col gap-3 text-gray-500 border-b-2 border-[#141e3b] p-5'>
        <p>
        I'm a new software enthusiast in the United States, gaining practical experience in various tech environments. Over time, I've improved my skills, creating strong and adaptable solutions for different challenges. I'm passionate about coding, focusing on delivering top-notch software that fits each project's needs. I thrive in teamwork, using my tech knowledge to contribute to our collective success.        </p>
      </div>
      <div className='py-10 flex flex-col m-5 border-b-2 border-[#141e3b]'>
        <h3 className='animate-in-right subhead-text'>My Skills</h3>
        <div className='animate-up mt-16 flex flex-wrap gap-12 content-center justify-center'>
          {skills.map((skill)=>(
            <div key={skill.name} className='block-container w-20 h-20 relative group'> 
              <div className='btn-back rounded-xl absolute'/> 
              <div className='btn-front rounded-xl flex justify-center items-center '> 
                <img src={skill.imageUrl} alt={skill.name} title={skill.name} className='w-1/2 h-1/2 object-contain'/>
              </div>
              <div className="absolute w-full h-full flex justify-center items-center text-sm text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-16 opacity-70"
              >{skill.name}</div> 
            </div>
          ))}
        </div>
      </div>
      <div className='py-16 m-5'>
        <h3 className='animate-in-right subhead-text'>
          Work Experience
        </h3>
        <div className='animate-in-left mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
            I've been working with various companies and picked up a lot of skills. Here is the rundown:
        </p>
        </div>
      <div className='mt-20 flex'>
        <VerticalTimeline>
          {workExperiences.map((experience) => (
            <VerticalTimelineElement key={experience.company_name}
            date={experience.date}
            icon={<div className='flex justify-center items-center w-full h-full'>
              <img 
                src={experience.icon}
                alt={experience.company_name}
                className='w-[90%] h-[90%] object-contain'/>
            </div>}
            iconStyle={{background: experience.iconBg}}
            contentStyle={{
              background: 'rgba(18, 4, 44, 0.76)',
              borderBottom: '8px',
              borderStyle: 'solid',
              borderBottomColor: experience.iconBg,
              boxShadow: 'none',
              color: '',
            }}>
              <div>
                <h3 className='text-gray-100 text-xl font-poppins font-semibold' >
                  {experience.title}
                </h3>
                <p className='text-gray-400 font-medium font-base' style={{margin: 0}}>
                  {experience.company_name}
                </p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index)=>(
                  <li key={`experience-point-${index}`} className='text-gray-200  font-normal pl-1 text-sm'>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      </div>
      <ContactMe/>
       
      </div>
)}

export default About;

