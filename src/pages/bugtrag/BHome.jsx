import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './bugtragComponents/context/AuthContext'
import axios from 'axios'
import Search from './bugtragComponents/Utilities/Search'


const BHome = ({ ...props}) => {
  const {user, token} = useAuth()
  const [activetab, setActiveTab] = useState(1)
  const [tickets, setTickets] = useState(null)
  const [inProgressTickets, setInProgressTickets] = useState(null)
  const [doneTickets, setDoneTickets] = useState(null)

  const [currentPage, setCurrentPage] = useState(1); 
  const [lastPage, setLastPage] = useState(1);
  const [inProgressCurrentPage, setInProgressCurrentPage] = useState(1);
  const [inProgresslastPage, setInProgressLastPage] = useState(1);
  const [doneCurrentPage, setDoneCurrentPage] = useState(1);
  const [doneLastPage, setDoneLastPage] = useState(1);

  const [projects, setProjects] = useState()

  const handletabClick = (i) => {
    setActiveTab(i);
    if (activetab === 1) {
      fetch_inProgresstickets()
      setCurrentPage(1)
      setInProgressCurrentPage(1)
    } else if (activetab === 2){
      fetch_doneTickets()
    }
  }

  const fetch_tickets = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag?page=${currentPage}`);
      setTickets(response.data.tickets)
      // console.log(response.data.tickets)
      setLastPage(response.data.tickets.last_page)
    }catch (error) {
      console.error('Login error', error)
    }
  }
  const fetch_inProgresstickets = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag-inprogress?page=${inProgressCurrentPage}`);
      setInProgressTickets(response.data.tickets.data)
      setInProgressLastPage(response.data.tickets.last_page)
    }catch (error) {
      console.error('Login error', error)
    }
  }
  const fetch_doneTickets = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag-done?page=${doneCurrentPage}`);
      setDoneTickets(response.data.tickets.data)
      setDoneLastPage(response.data.tickets.last_page)
    }catch (error) {
      console.error('Login error', error)
    }
  }
  const fetch_projects = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/get_all_projects`);
      setProjects(response.data.projects)
      // console.log(response.data.projects)
    }catch (error) {
      console.error('Login error', error)
    }
  } 
  const onSearchResults = (searchResults) => {
    setTickets(searchResults)
    setLastPage(searchResults.last_page)
    setDoneTickets(searchResults.data.filter(item=>item.status === 'Done'))
    setDoneLastPage(searchResults.last_page) 
    setInProgressTickets(searchResults.data.filter(item=>item.status === 'In Progress'))
    setInProgressLastPage(searchResults.last_page)
  }
  useEffect(()=>{
    fetch_tickets();
    fetch_projects();
    fetch_inProgresstickets();
    fetch_doneTickets();
  }, [currentPage, inProgressCurrentPage, doneCurrentPage])

  return (
    <div className='bug-main-container flex flex-col'>
      <div className=''>
          <h1 className=''></h1>
      </div>
{/* Projects */}
      <div className='info-container  overflow-scroll justify-start items-start'>
        {projects && Object.keys(projects).map((key, index)=>( 
          <div key={key} className={`data-container min-w-[13em] max-w-[13em] overflow-y-auto bg-[#3b3b3b]`}>
            <Link to={`/bugtrag/projects/${projects[key].id}`}>
            <div className='opacity-40 blur '>
              <img className='object-cover absolute opacity-30 w-full ' src={projects[key].attachments}/>
            </div>
            <div className='mb-3 text-xl border-b-2  border-inherit '>
              {projects[key].name}
            </div>
            <div className='max-h-[200px] overflow-auto'>
              <div dangerouslySetInnerHTML={{ __html: projects[key].description }}/> 
            </div>
            <div className='text-sm align-baseline'>
              Open issues: <span>{projects[key].user_tickets.length}</span>
            </div>
            <div className='opacity-100 flex justify-center items-baseline p-2 '>
              <img className='object-cover max-w-[12rem] max-h-[140px] ' src={projects[key].attachments}/>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className='flex flex-row justify-center text-xl' alt='create new project'>
        <Link to='/bugtrag/projects/create'>+</Link>
      </div>
{/* Tickets tabs */}
      <div className='ticket-tablist flex flex-col'>
        <div className='flex flex-row justify-between'> 
          <div className='tabs flex m-5'>
            <div className={`tab ${activetab === 1 ? 'active-tab' : ''}`} onClick={()=>handletabClick(1)}>
              Worked on
            </div>
            <div className={`tab ${activetab === 2 ? 'active-tab' : ''}`} onClick={()=>handletabClick(2)}>
              In Progress
            </div>
            <div className={`tab ${activetab === 3 ? 'active-tab' : ''}`} onClick={()=>handletabClick(3)}>
              Done
            </div>
          </div>
          <div className='mr-[5%] flex items-center'>
              <Search onSearchResults={onSearchResults}/>
          </div>
        </div>
        <div className='tab-content mx-2'>
          {activetab === 1 && 
          <div className=''>
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
                <div className='flex flex-row justify-between mx-10'>
            <button onClick={()=>{setCurrentPage(currentPage - 1)}} disabled={currentPage===1} className={`${currentPage===1 ? 'opacity-20' : 'opacity-100'}`}> Prev </button>
            <span>{currentPage}</span>
            <button onClick={()=>{setCurrentPage(currentPage + 1)}} disabled={currentPage===lastPage} className={`${currentPage===lastPage ? 'opacity-20' : 'opacity-100'}`}> Next </button>
              </div>
          </div>}
          {activetab === 2 && 
          <div className=''>
                {inProgressTickets && inProgressTickets.map((tick)=>(
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
                <div className='flex flex-row justify-between mx-10'>
            <button onClick={()=>{setInProgressCurrentPage(inProgressCurrentPage - 1)}} disabled={inProgressCurrentPage===1} className={`${inProgressCurrentPage===1 ? 'opacity-20' : 'opacity-100'}`}> Prev </button>
              <span>{inProgressCurrentPage}</span>
            <button onClick={()=>{setInProgressCurrentPage(inProgressCurrentPage + 1)}} disabled={inProgressCurrentPage===inProgresslastPage} className={`${inProgressCurrentPage===inProgresslastPage ? 'opacity-20' : 'opacity-100'}`}> Next </button>
              </div>
          </div>}

          {activetab === 3 && 
          <div className=''>
                {doneTickets && doneTickets.map((tick)=>(
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
                <div className='flex flex-row justify-between mx-10'>
            <button onClick={()=>{setInProgressCurrentPage(doneCurrentPage - 1)}} disabled={doneCurrentPage===1} className={`${doneCurrentPage===1 ? 'opacity-20' : 'opacity-100'}`}> Prev </button>
              <span>{doneCurrentPage}</span>
            <button onClick={()=>{setInProgressCurrentPage(doneCurrentPage + 1)}} disabled={doneCurrentPage===doneLastPage} className={`${doneCurrentPage===doneLastPage ? 'opacity-20' : 'opacity-100'}`}> Next </button>
              </div>
          </div>}
          
        </div>
          
      </div>
      
      <div className='flex flex-row justify-between items-center text-sm m-10 '>
        <div className='p-5 mt-10'>
        Not a user? <Link className='text-blue-500' to='/bugtrag/signup'>Signup! </Link> 
        </div>
        <div className='p-5 mt-10'>
        Already a user? <Link className='text-blue-500' to='/bugtrag/login'>Login!</Link> 
        </div>
      </div>
    </div>
  )
}

export default BHome
