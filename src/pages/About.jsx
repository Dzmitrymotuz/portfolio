import React from 'react'
import { experiences, skills } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workExperiences } from '../constants/ProjectFiles';
import ContactMe from '../components/ContactMe';
import { useState } from 'react';




const About = () => {
  return(
      <div className='bg-[rgb(6,11,25)] m-0 text-gray-200 font-poppins'>  
      <h1 className=' head-text m-5 mt-0 border-t-2 border-[#141e3b] mb-0'>
        Hello, I'm <span className='text-[#763ad6] drop-shadow'>Dimitry</span> 
      </h1> 
      <div className='animate-in-left  flex flex-col gap-3 text-gray-400 border-b-2 border-[#141e3b] p-5 pt-0'>
        <p> 
        I’m a passionate software engineer based in the United States, turning creative ideas into impactful, real-world solutions. With hands-on experience across diverse tech environments, I’ve sharpened my skills to design and build adaptable, high-performing software that truly makes a difference. Coding isn’t just my profession—it’s my craft. I’m driven by the excitement of solving complex problems and delivering exceptional results that exceed expectations. I thrive in dynamic, collaborative teams, where I can combine my technical expertise with a shared vision to create meaningful innovations. For me, every line of code is a step toward shaping something extraordinary.      
        </p>
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

