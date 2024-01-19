import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import InfoBox from './infoBox'
import { useAuth } from './context/AuthContext'
import ReactQuill from 'react-quill'


const Ticket = () => {
    const {user} = useAuth()
    const params = useParams()
    const [ticket, setTicket] = useState()
    const [created, setCreated] = useState()
    const [updated, setUpdated] = useState()
    const [ticketStatus, setTicketStatus] = useState()
    const [projectValue, setProjectValue] = useState()
    const [isEdited, setIsEdited] = useState(false)
    const [watch, setWatch] = useState()    
    const [image, setImage] = useState(null)
    const [projects, setProjects] = useState()

    const navigate = useNavigate()
    const commentRef = useRef()
    const statusRef = useRef()
    const projectRef = useRef()
    


    const fetch_ticket = async() => {
        try {
            const response  = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/fetch_ticket_id/${params.id}`)
            setTicket(response.data.ticket)
            console.log(response.data.ticket.projects.name)
            const created_at = new Date(response.data.ticket.created_at).toLocaleString()
            const updated_at = new Date(response.data.ticket.updated_at).toLocaleString()
            setCreated(created_at)
            setUpdated(updated_at)
            setTicketStatus(response.data.ticket.status)
            setWatch(response.data.ticket.watch)
            setProjectValue(response.data.ticket.projects.id)
        }catch(e){
            console.error(e.response.data.message)
        }
    }
    const send_comment = async(e) => {
        // e.preventDefault()
        const payload = {
            user_id: user.id,
            content: commentRef.current.value,
            ticket_id: ticket.id,
            image: null,
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/post_comment`, payload)
            // console.log(response)
        }catch(e){
            console.error(e.response.data.message)
        }
    }
    const delete_ticket = async() => {
        const isConfirmed = window.confirm('Delete?')
        if (isConfirmed) {
            try {
                const response = await axios.delete(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/delete_ticket/${ticket.id}`)
                // console.log(response)
                if (response.status === 200) {
                    navigate("/bugtrag")
                } else {
                    console.log(response.status)
                }
            }catch(e){
                console.error(e.response.data.message)
        }}else{
        }
    }
    const change_status = async(e) => {
        setTicketStatus(statusRef.current.value)
        const payload = {
            status: statusRef.current.value,
        }
        try {
            const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/change_status/${ticket.id}`, payload)
        }catch(e){
            console.error(e.response.data.message)
        }
    }
    const change_project = async(e) => {
        setProjectValue(projectRef.current.value)
        const payload = {
           project_id: projectRef.current.value,
        }
        try {
            const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/change-project/${ticket.id}`, payload)
        }catch(e){
            console.error(e.response.data.message)
        }
    }
    const handleWatch = async(e) => {
        setWatch((prevWatch => prevWatch === 0 ? 1 : 0))
        const payload = {
            watch: watch === 0 ? 1 : 0,
        }
        try {
            const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/watching/${ticket.id}`, payload)
            setWatch(response.data.ticket.watch)
        }catch(e){
            console.error(e.response.data.message)
        }
    }
    const handleImage = async(e) => {
        const uploadedImage = e.target.files[0]
        const reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(uploadedImage)

        const formData = new FormData()
        formData.append('attachments', uploadedImage)
        try{
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/update-ticket-photo/${ticket.id}`, formData)
            console.log(response.data)
        }catch(e){
            console.error(e.response.data.message)
        } 
    } 
    const handleEdit = async(e) => {
        e.preventDefault()
        try { 
            const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/edit-ticket/${ticket.id}`, {
            title : ticket.title,
            description : ticket.description,
            priority : ticket.priority,
            reporter : ticket.reporter,
            assign : ticket.assignee,
            status : ticket.status,
            project_id : ticket.project_id,
            })
        }catch(e){
            console.error(e.response.data.message)
        }   
        setIsEdited(!isEdited)
    }
    const fetch_projects= async() => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/get_all_projects`);
            setProjects(response.data.projects)
            // console.log(response.data.projects)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetch_ticket()
        fetch_projects()
    },[])

  return (
    <>
    <InfoBox/>
    <div className='bug-main-container'>
            {ticket && 
            <div className='w-[80%] mt-10 ml-[10%] '>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                    <div className='mx-2 my-2 w-5 h-5 hover:cursor-pointer' onClick={handleWatch}>
                        {watch === 1 ? <img alt='watch' value='1' src='/eye-on.svg'/> : <img value='0' src='/eye-off.svg'/>}
                    </div>
                    <div>
                    <select 
                    onChange={change_status} 
                    className={`select-status bg-[#919191] ${ticketStatus === 'Done' ? 'done': ticketStatus === 'In Progress' ? 'inprogress' : ticketStatus === 'Released' ? 'released' : ticketStatus === 'To do' ? 'todo' :''}`}
                    value={ticketStatus} 
                    ref={statusRef}>
                            <option value='To do'>To do</option>
                            <option value='Done'>Done</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Released'>Released</option>
                    </select>
                    </div>
                    </div>
                    <div className='flex flex-row '> 
{/* DROP-DOWN PROJECTS */}
                    <div className='flex flex-row text-sm mx-10 justify-center '>
                        <label>Project: </label>
                        {projectValue && <select  
                            className={`select-status bg-[#515151] `}
                            onChange={change_project}
                            value={projectValue}
                            ref={projectRef}
                            >
                                {projects && projects.map((project, index)=>(
                                    <option key={index} value={project.id} >{project.name}</option>
                                ))}
                        </select>}
                    </div>
                        <label className='text-xs mr-40'>Assignee: {ticket.assignee}</label>
                        {isEdited ? 
                        <div className='mr-2' onClick={(e)=>handleEdit(e)}>
                            <img src='/save.svg' alt='save' className='w-4 delete_icon'/> 
                        </div> 
                        :
                        <div className='mr-2'>
                            <img src='/save.svg' alt='save' className='w-4 delete_icon opacity-20'/> 
                        </div> }
                        <div className='mr-2' onClick={()=>setIsEdited(!isEdited)}>
                            <img src='/edit.svg' alt='edit' className='w-4 delete_icon'/> 
                        </div> 
                        <div onClick={()=>delete_ticket()}>
                            <img src='/del.svg' alt='delete' className='w-4 delete_icon'/>
                        </div>
                    </div> 
                </div>
                <div  className='flex justify-start items-center mt-5 text-lg'>
                    {isEdited ?
                        <input
                            className='text-area w-[100%]'
                            type='text'
                            value={ticket.title}
                            onChange={(e) => setTicket({...ticket, title:e.target.value})}
                    />
                    :
                    <strong>{ticket.title}</strong>}
                </div>
{/* Description & Image */}
                <div className='mt-5 mb-5 '>
                    {isEdited ? 
                    <div className='flex flex-col'>
                    <ReactQuill 
                        theme='snow'
                        value={ticket.description}
                        onChange={(value)=>setTicket({...ticket, description: (value)})}
                        placeholder='Project Description'
                        className='w-[100%] mt-0 h-[50vh] max-h-[50vh]'
                    />
                    <div className='my-0  pt-12'>
                        <input 
                        type='file'
                        id='imageInput'
                        className='bug-btn w-[100%]'
                        onChange={(e)=>handleImage(e)}
                         />
                        {!image ? <img src={ticket.attachments} alt="Attachment"/> : <img src={image} alt='preview'/>}
                    
                        <button className='bug-btn w-[100%] mb-0' onClick={handleEdit}>Save Changes</button>
                        </div>
                    </div>
                    :
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: ticket.description }}/>
                        <div>
                            {ticket.attachments && <img src={ticket.attachments} alt="Attachment"/>}
                        </div>
                    </div> 
                    }
                    
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
            <div>
{/* comments section */}
            <div>
                <div className='comment-sender w-[60%] ml-[20%]'>
                    <form onSubmit={(e)=>send_comment(e)}>
                    <div className='flex flex-col justify-center items-center'>
                        <textarea className='text-area w-[95%]' ref={commentRef} required placeholder='Leave a comment' />
                        <button className='bug-btn w-[95%]' type='submit'>Send</button>
                    </div>
                    </form>
                </div>
            </div>
        <div className='bg-[#303030] h-[50vh]'>
            <div className='ml-[10%] comment-section'>
                <span >Activity: </span>
            {ticket&& Object.keys(ticket.comments).map((key)=>(
                <div key={ticket.comments[key].id} className='flex flex-row w-[100%]'>
                    <div className='mx-5'>
                        <img src='/dm.png' className='w-[50px] h-[50px]'/>
                    </div>
                    <div className='flex flex-col my-2 w-[80%]'>
                        <div className='flex flex-row justify-between mr-5 w-[100%]'>
                            <div>
                                <span className='text-sm'>{ticket.comments[key].user.name}:</span>
                            </div>
                            <span className='text-sm'>{new Date(ticket.comments[key].created_at).toLocaleString([], {month:'short', day: 'numeric'})}</span>
                        </div>
                        <div key={key} className='my-5'>
                            {ticket.comments[key].content}
                        </div>
                    </div>
                </div>
            ))}    
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Ticket
