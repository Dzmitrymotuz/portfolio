import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import InfoBox from './infoBox'


const Ticket = () => {
    const params = useParams()
    const [ticket, setTicket] = useState()
    const [created, setCreated] = useState()
    const [updated, setUpdated] = useState()
    const navigate = useNavigate()

    const fetch_ticket = async() => {
        try {
            const response  = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/fetch_ticket_id/${params.id}`)
            setTicket(response.data.ticket)
            console.log(response.data.ticket)
            const created_at = new Date(response.data.ticket.created_at).toLocaleString()
            const updated_at = new Date(response.data.ticket.updated_at).toLocaleString()
            setCreated(created_at)
            setUpdated(updated_at)
        }catch(e){
            console.error(e.response.data.message)
        }
    }

    useEffect(()=>{
        fetch_ticket()
    },[])

  return (
    <>
    <InfoBox/>
    <div className='bug-main-container'>
            {ticket && 
            <div className='w-[80%] mt-10 ml-10 h-[120vh]'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                    <div className='mx-2'>
                        {ticket.watch===1 ? <img className='w-5 h-5' src='/eye-on.svg'/> : <img className='w-5 h-5' src='/eye-off.svg'/>}
                    </div>
                    <label className='text-xs'>Status: </label>
                        {ticket.status}
                    </div>
                    <div>
                        <label className='text-xs'>Assignee: </label>
                        {ticket.assignee}
                    </div>
                </div>
                <div  className='flex justify-center items-center'>{ticket.title}</div>
                <div className='mt-5 mb-5'>
                    {ticket.description}
                    <div className='flex flex-row justify-between mb-10 mt-5'>
                        <div>
                            <label className='text-xs'>Created: </label>
                            <label className='text-sm'>{created}</label>
                        </div>
                        <div>
                            <label className='text-xs'>Updated: </label>
                            <label className='text-sm'>{updated}</label>
                        </div>
                    </div>
                </div>
            </div>}
    </div>
    </>
  )
}

export default Ticket
