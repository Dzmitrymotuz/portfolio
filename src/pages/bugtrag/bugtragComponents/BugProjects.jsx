import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import axios from 'axios'

const BugProjects = () => {
    const [projects, setProjects] = useState()


    const fetch_projects = async() => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/get_all_projects`);
          setProjects(response.data.projects)
          // console.log(response.data.projects)
        }catch (error) {
          console.error('Login error', error)
        }
      }
    
      useEffect(()=>{
        fetch_projects()
      }, [])

  return (
    <div className='bug-main-container h-[100vh] flex flex-col justify-between items-center'>
      <div className='w-[90%] pt-10 '>
        <table>
            <thead>
                <tr> 
                <th className=''>
                    Logo
                </th>
                <th className=''>
                    Project Name
                </th>
                <th className=''>
                    Status
                </th>
                <th className=''>
                    Releases
                </th>
                <th className=''>
                    Tickets
                </th>
                </tr>
            </thead>
            <tbody>
      {projects && Object.keys(projects).map((key)=>( 
            <tr key={key}>
              <td className='flex justify-center' style={{width: '10px !important'}}>
                <Link to={`/bugtrag/projects/${projects[key].id}`}>{<img className='rounded-full border-2 border-[#7b7b7b] hover:border-[#EEEEEE] ease-in duration-300 w-[50px] h-[50px]' src={projects[key].attachments}></img>}</Link>
              </td>
              <td> 
                  <Link to={`/bugtrag/projects/${projects[key].id}`}>{projects[key].name}</Link>
              </td>
              <td>{projects[key].status}</td>
              <td>{projects[key].releases}</td>
              <td><Link to={'/bugtrag'}>{projects[key].user_tickets.length}</Link></td>
            </tr>
        ))}
        </tbody>
        </table>

      </div>



      <div className='info-container'>
        
      </div>
    </div>
  )
}

export default BugProjects
