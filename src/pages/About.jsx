import React from 'react'
import { experiences, skills } from '../constants'
import { Canvas } from '@react-three/fiber'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { workExperiences } from '../constants/ProjectFiles';
import ContactMe from '../components/ContactMe';

const About = () => {
  return(
    <section className='max-container'>
      <h1 className='animate-down head-text'>
        Hello, I'm <span className='red-gradient_text drop-shadow'>Dimitry</span>

      </h1>

      <div className='animate-in-left mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        I'm a new software enthusiast in the United States, gaining practical experience in various tech environments. Over time, I've improved my skills, creating strong and adaptable solutions for different challenges. I'm passionate about coding, focusing on delivering top-notch software that fits each project's needs. I thrive in teamwork, using my tech knowledge to contribute to our collective success.        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='animate-in-right subhead-text'>My Skills</h3>
        <div className='animate-up mt-16 flex flex-wrap gap-12'>
          {skills.map((skill)=>(
            <div key={skill.name} className='block-container w-20 h-20'>
              <div className='btn-back rounded-x1'/>
              <div className='btn-front rounded-x1 flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name}  className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='animate-in-right subhead-text'>
          Work Experience
        </h3>
        <div className='animate-in-left mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
            I've been working with various companies and picked up a lot of skills. Here is the rundown:
        </p>
        </div>
      <div className='mt-12 flex'>
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
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}>
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin: 0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index)=>(
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
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
    </section>
)}

export default About;

