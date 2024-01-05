import React, { useEffect, useState, useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

const CreateTicket = () => {
    const [assignees, setAssignees] = useState([])
    const {user} = useAuth()
    const sumRef = useRef()
    const descRef = useRef()
    const assigRef = useRef()
    const priorityRef = useRef()
    const navigate = useNavigate()


    const fetch_assignee = async() => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/assignee`);
            setAssignees(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const send_data = async(e) => {
        e.preventDefault()
        const payload = {
            title : sumRef.current.value,
            description : descRef.current.value,
            assign : assigRef.current.value,
            priority : priorityRef.current.value,
            reporter : user.name,
            status: 'To Do',
        } 
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/create_ticket`, payload);
            if (response.status === 200) {
                navigate("/bugtrag")
            }
        }catch (e) {
            console.log(e);
        }
    }

    useEffect(()=>{
        fetch_assignee()
    },[sumRef])

  return (
    <div className='bug-main-container h-[100vh]'>
    <div className='flex flex-col justify-between'>
        <h3>Create ticket</h3>
        <form onSubmit={(e)=>send_data(e)}>
            <div className='flex flex-col'>
                <div className='text-sm mb-[-7px] ml-2'>
                    Assignee:
                </div>
            <select ref={assigRef} name="assignees" id="assignees" className='select'>
                <option value='None'>None</option>      
                {
                    Object.keys(assignees).map((key) => (
                        <option key={key} value={assignees[key].name}>
                            {assignees[key].name}
                        </option>
                    ))
                }
            </select>
            <div>
                <input ref={sumRef} required placeholder='Summary' className='text-area'></input>
            </div>
            <div>
                <textarea ref={descRef} required className='text-area' type='text' placeholder='Description'/>
            </div>
            <select ref={priorityRef} name='priority' id='priority' className='select'>
                <option value='2'>High</option>
                <option value='1'>Med</option>
                <option value='0'>Low</option>
            </select>
            <div>
                <span className='mt-5 flex flex-row justify-end mr-10'>Reporter: {user && user.name}</span>
            </div>
            </div>
            <button className='bug-btn w-[95%]' type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default CreateTicket
