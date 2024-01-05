import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './bugtragComponents/context/AuthContext'
import axios from 'axios'

const BHome = ({ ...props}) => {
  const {user, token} = useAuth()
  const [activetab, setActiveTab] = useState(1)
  const [tickets, setTickets] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const testData = [ 
    "Choose the option that best fits your design and user experience preferences. If you dont want the content to overflow at all, use overflow: hidden. If you want to allow scrolling when the content exceeds the container dimensions, use overflow: auto or overflow: scroll.    'skfdbghbdtkjgdrjnfksjbfkbdrjgkdntjkaedwadadwadawdawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw aawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwaadawdrthyjukjyujgjg wda a adwadawdw adfawfwa adad  awdawdawdwadadfawfwa adad  awdawdawdwadaw ghdnt",
    'skfdbghbdtkjgdrjnfksjbfkbdrjgkdntjkaedwadadwadawdawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw aawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwaadawdrthyjukjyujgjg wda a adwadawdw adfawfwa adad  awdawdawdwadadfawfwa adad  awdawdawdwadaw ghdnt',
    'skfdbghbdtkjgdrjnfksjbfkbdrjgkdntjkaedwadadwadawdawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw aawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwaadawdrthyjukjyujgjg wda a adwadawdw adfawfwa adad  awdawdawdwadadfawfwa adad  awdawdawdwadaw ghdnt',
    'skfdbghbdtkjgdrjnfksjbfkbdrjgkdntjkaedwadadwadawdawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw aawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwaadawdrthyjukjyujgjg wda a adwadawdw adfawfwa adad  awdawdawdwadadfawfwa adad  awdawdawdwadaw ghdnt',
    'skfdbghbdtkjgdrjnfksjbfkbdrjgkdntjkaedwadadwadawdawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw aawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwaadawdrthyjukjyujgjg wda a adwadawdw adfawfwa adad  awdawdawdwadadfawfwa adad  awdawdawdwadaw ghdnt',
    'skfdbghbdtkjgdrjnfksjbfkbdrjgkdntjkaedwadadwadawdawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw aawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwa wda a adwadawdw adfawfwa adad  awdawdawdwadaawd  dwadawdwaadawdrthyjukjyujgjg wda a adwadawdw adfawfwa adad  awdawdawdwadadfawfwa adad  awdawdawdwadaw ghdnt',
  ]
  const handletabClick = (i) => {
    setActiveTab(i);
  }

  const fetch_tickets = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag?page=${currentPage}`);
      setTickets(response.data.tickets)
      setLastPage(response.data.tickets.last_page)
    }catch (error) {
      console.error('Login error', error)
    }
  }

 
  useEffect(()=>{
    fetch_tickets();
  }, [currentPage])

  return (
    <div className='bug-main-container flex flex-col'>
      <div className=''>
          <h1 className=''>BugTrag</h1>
      </div>
      <div className='info-container'>
        {testData.map((data, i)=>(
          <div key={i} className='data-container'>{data}</div>
        ))}
      </div>
      <div className='ticket-tablist flex flex-col'>
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
        <div className='tab-content'>
          {activetab === 1 && 
          <div className=''>
                {tickets && tickets.data.map((tick)=>(
                  <Link key={tick.id}  to={`/bugtrag/ticket/${tick.id}`}>
                    <div key={tick.id} className='ticket-container'>
                    <div className='flex flex-row justify-between items-center ml-1 mr-4 mt-2'>
                    <p>{tick.id} </p>
                      <div className='border-b-2 border-gray-500 pb-2'>
                        {tick.title}
                      </div>
                    {tick.watch===1 ? <img className='w-5 h-5' src='/eye-on.svg'/> : <img className='w-5 h-5' src='/eye-off.svg'/>}
                    </div>
                    <div className='m-3 '>
                      <span>
                        {tick.description}
                      </span>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                      <span className='m-1'><span className='text-xs'>Reporter:</span> {tick.reporter}</span>
                      <div>
                        <span className='text-xs'>{new Date(tick.created_at).toLocaleString([], {month:'short', day: 'numeric'})}</span>
                      </div>
                    </div>
                  </div>
                  </Link>
                ))}
          </div>}
          <div className='flex flex-row justify-between mx-10'>
            <button onClick={()=>{setCurrentPage(currentPage - 1)}} disabled={currentPage===1} className={`${currentPage===1 ? 'opacity-20' : 'opacity-100'}`}> Prev </button>
            <span>{currentPage}</span>
            <button onClick={()=>{setCurrentPage(currentPage + 1)}} disabled={currentPage===lastPage} className={`${currentPage===lastPage ? 'opacity-20' : 'opacity-100'}`}> Next </button>
          </div>
          {activetab === 2 && <div>tiket2</div>}
          {activetab === 3 && <div>tiket3</div>}
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
