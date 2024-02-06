import React, { useEffect, useState, useRef, useReducer} from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Footer from './Utilities/Footer'


function reducer(state, action) {
    switch (action.type) {
        case 'projects': {
            return {
                projects: true,
                password_change: false, 
            };
        }
        case 'password_change': {
            return {
                password_change: true,
                projects: false,
            }
        }
    }
    throw Error('Unknown action ' + action.type);
}

const User = () => {
    const {user} = useAuth()
    const [tickets, setTickets] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [lastPage, setLastPage] = useState(0)
    const [projects, setProjects] = useState()
    const params = useParams()

    const oldPassword = useRef()
    const newPassword = useRef()

    const [state, dispatch] = useReducer(reducer, {projects: {projects: true, password_change: false}})

    const fetch_user_tickets = async() => {
        try { 
          const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/user_tickets?id=${params.id}`);
          setTickets(response.data.tickets)
          setLastPage(response.data.tickets.last_page)
        }catch (error) {
          console.error('Login error', error.response.data.message)
        }
      }
    const fetch_user_projects = async() => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/get_all_user_projects?id=${params.id}`);
        setProjects(response.data.projects)
    //   console.log(response.data.projects)
    }catch (error) {
        console.error('Login error', error.response.data.message)
    }
    } 
    const handleTab = (e) => {
    switch (e.target.value) {
            case 'projects':{
                dispatch({type: 'projects'});
                break;
            };
            case 'password': {
                dispatch({type: 'password_change'});
                break;
            };
        } 
    }
    const changePassword = async(e) => {
        console.log(oldPassword.current.value)
        console.log(newPassword.current.value)
        try { 
            const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/${params.id}/password_change`);
            console.log(response.data)
          }catch (error) {
            console.error('Login error', error.response.data.message)
          }
    }

    useEffect(()=>{
        fetch_user_tickets()
        fetch_user_projects()
    }, [currentPage])

  return (
    <>
    <div className='bug-main-container'> 
      <div className='flex flex-row'>
        <div className='w-[25%] bg-[#3b3b3b]' name='left'>
            <div>
                <button className='bug-btn w-[100%]' value='projects' onClick={(e)=>handleTab(e)}>Tickets & Projects</button>
            </div>
            <div>
                <button className='bug-btn w-[100%]'  value='password' onClick={(e)=>handleTab(e)}>Password & info</button>
            </div>
        </div>
{/* Tickets & projects */}
{ state.projects &&
        <div className='w-[75%]' name='right'>
            <div className='flex flex-col'>
                <div>
                <div className=' border-0 ml-[10px] mr-[5px] bg-[#4d4d4d] text-[#EEEEEE] flex justify-center items-center'>
                        <span className='text-lg '>Your Projects</span>
                    </div>
                <div className='info-container  overflow-scroll justify-start items-start'>
            {projects && Object.keys(projects).map((key, index)=>( 
            <div key={key} className={`data-container min-w-[13em] max-w-[13em] overflow-y-auto`}>
                <Link to={`/bugtrag/projects/${projects[key].id}`}>
                <div className='opacity-40 blur '>
                <img className='object-cover absolute opacity-30 w-full' src={projects[key].attachments}/>
                </div>
                <div className='mb-3 text-lg border-b-2  border-inherit '>
                {projects[key].name}
                </div>
                <div className='max-h-[200px] overflow-auto'>
                <div dangerouslySetInnerHTML={{ __html: projects[key].description }}/> 
                </div>
                <div className='text-sm align-baseline'>
                {/* Open issues: <span>{projects[key].user_tickets.length>0 ? projects[key].user_tickets.length : 'fdxb'}</span> */}
                </div>
                <div className='opacity-100 flex justify-center items-baseline p-2 '>
                <img className='object-cover max-w-[12rem] max-h-[140px] ' src={projects[key].attachments}/>
                </div>
                </Link>
            </div>
            ))}
    {projects && projects.length === 0 && 
    <div className='w-[75%] m-5'>
        You have no current projects
    </div> 
    }
        </div>
            </div>
            <div className=''>
                <div className='border-0 ml-[10px] mr-[5px] mb-[5px] bg-[#4d4d4d] text-[#EEEEEE] flex justify-center items-center'>
                    <span className='text-lg '>Your Tickets:</span>
                </div>
                {tickets && tickets.data.map((tick)=>(
                <Link key={tick.id}  to={`/bugtrag/ticket/${tick.id}`}>
                    <div key={tick.id} className='ticket-container'>
                    <div className='flex flex-row justify-start items-center ml-1 mr-4 mt-2'>
                    <div 
                        className={`p-1 rounded-md ${tick.status === 'Done' ? 'done': tick.status === 'In Progress' ? 'inprogress' : tick.status === 'Released' ? 'released' : tick.status === 'To do' ? 'todo' :''}`}
                    >                          
                    {tick.status}
                        </div>
                        <div className='flex flex-row'>
                        <p className='mx-5'>{tick.id} </p>
                    </div>
                    {tick.watch===1 ? <img className='w-5 h-5' src='/eye-on.svg'/> : <img className='w-5 h-5' src='/eye-off.svg'/>}
                    </div>
                    <div className='ml-1 my-3'>
                        <div className='text-lg'>
                        {tick.title}
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                    <span className='m-1'><span className='text-xs'>Reporter:</span> {tick.reporter}</span>
                    <div>
                        <span className='text-xs mr-5'>{new Date(tick.created_at).toLocaleString([], {month:'short', day: 'numeric'})}</span>
                    </div>
                    </div>
                </div>
                </Link>
                ))}
    {tickets && tickets.data.length === 0 &&
    <div className='w-[75%] m-5 h-screen'>
        <label>You have no tickets currently</label>
    </div> 
    }
                <div className='flex flex-row justify-between mx-10'>
            <button onClick={()=>{setCurrentPage(currentPage - 1)}} disabled={currentPage===1} className={`${currentPage===1 ? 'opacity-20' : 'opacity-100'}`}> Prev </button>
            <span>{currentPage}</span>
            <button onClick={()=>{setCurrentPage(currentPage + 1)}} disabled={currentPage===lastPage} className={`${currentPage===lastPage ? 'opacity-20' : 'opacity-100'}`}> Next </button>
            </div>
            </div>
            </div>
            </div>
} 
{state.password_change && 
    <div className='flex flex-col h-screen items-center justify-top w-[75%]'>
        <div className='mb-2'>
            <label className='text-sm'>Old Password: </label><br/>
            <input className='text-area' type='password' ref={oldPassword} placeholder='Old Password'></input>
        </div>
        <div className='mb-2'>
            <label className='text-sm'>New Password: </label><br/>
            <input className='text-area' type='password' ref={newPassword} placeholder='New Password'></input>
        </div>
        <button className='bug-btn' onClick={changePassword}>Change Password</button>
    </div>
}
      </div> 
    </div>
    <Footer/>
</>

  )
}

export default User
