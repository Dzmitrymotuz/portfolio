import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import InfoBox from './infoBox'
import { useAuth } from './context/AuthContext'
import ReactQuill from 'react-quill'

const BugProjectSingle = () => {
    const params = useParams()
    const [project, setProjects] = useState([])
    const [tickets, setTickets] = useState()
    const [isEdited, setIsEdited] = useState(false)
    const [users, setUsers] = useState([])
    const [notConnectedUsers, setNotConnectedUsers] = useState()
    const [imageSrc, setImageSrc] = useState()
    const [image, setImage] = useState()
    const [selectedIds, setSelectedIds] = useState([])

    const handleUserClick = (userId) => {
      setSelectedIds((prevSelectedIds) =>
        prevSelectedIds.includes(userId)
          ? prevSelectedIds.filter((id) => id !== userId)
          : [...prevSelectedIds, userId]
      );
    };

    const navigate = useNavigate()

    const fetch_project = async() => {
        try {
            const response  = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/fetch_project/${params.id}`)
            setProjects(response.data.project)
            setTickets(response.data.project.user_tickets)
            setImage(response.data.project.attachments)
        }catch(e){
            console.error(e.response.data.message)
        }
    }
    const fetch_project_users = async() => {
        try {
            const response  = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/fetch_project_users/${params.id}`)
            setUsers(response.data.connectedUsers)
            setNotConnectedUsers(response.data.notConnectedUsers)
        }catch(e){
            console.error(e.response.data.message)
        }
    }
    const delete_project = async(e) => {
      e.preventDefault()
      try{
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/delete-project/${params.id}`)
        if (response.status === 200) {
          navigate('/bugtrag')
        }
      }catch(e){
        console.error(e.response.data.message)
    }
    }
    const handleImage = (e) => {
      e.preventDefault()
      const selectedImage = e.target.files[0];
      setImage(e.target.files[0])
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageSrc(reader.result) 
      }
      reader.readAsDataURL(selectedImage);
    }
    const updateImage = async(e) => {
      e.preventDefault()
      const formData = new FormData()
      formData.append('attachments', image)
      try {
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/update-project-photo/${project.id}`, formData)
        console.log(response.data)
      }catch(e){
        console.error(e)
    }
  } 
    const handleEdit = async(e) => {
      updateImage(e)
      // e.preventDefault()
        try { 
            const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/edit-project/${project.id}`, {
              name: project.name,
              description: project.description,
            })
            console.log(response.data)
        }catch(e){
            console.error(e.response.data.message)
        }   
        setIsEdited(!isEdited)
    }
    const send_users = async() => {
      const payload = {
        users: selectedIds,
        project_id: project.id
      }
      try { 
        const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/add_users_to_projects`, payload)
        fetch_project_users()
      }catch(e){
          console.error(e.response.data.message, payload)
      }   
    }
    const dismiss_user = async(id) => {
      const payload = {
        user_id: id,
        project_id: project.id
      }
      try { 
        const response = await axios.put(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/dismiss_user_from_project`, payload)
        fetch_project_users()
        console.log(response.data.message)
      }catch(e){
          console.error(e.response.data.message, payload)
      }   
    }

    useEffect(()=>{
        fetch_project()
        fetch_project_users()
    },[])
  return (
    <div className='bug-main-container '>
        <div className='project-container mt-10 rounded-md m-10 py-10 flex items-center justify-start shadow-sm shadow-slate-100 bg-[#464646] w-[95%]'> 
        {project &&
        <div className='flex flex-col'>
{/* ICONS */}
          <div className='flex flex-row justify-end mt-[-3%] mr-[5%]'>
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
              <div onClick={(e)=>delete_project(e)}>
                  <img src='/del.svg' alt='delete' className='w-4 delete_icon'/>
              </div>
            </div>
        
        <div className='flex flex-row mx-[5%]'>
{/* IMAGE */}
            {isEdited ? 
            <div className='flex flex-col items-center justify-top '>
              <label htmlFor="imageInput" className='bug-btn '>Attach New Image</label>
              <input
                    type="file"
                    id="imageInput"
                    style={{display: 'none'}}
                    accept="image/*"
                    onChange={(e) => handleImage(e)}
                />
              {image && (
                <div className='max-w-[20rem] max-h-[20m] mx-5 p-5 '>
                    <div className=''>
                        <p className='text-sm'>Preview:</p>
                        {/* <img src={imageSrc} alt='preview' className='w-[200px] h-auto'/> */}
                        {!imageSrc ? <img src={project.attachments} alt="Attachment"/> : <img src={imageSrc} alt='preview'/>}
                    </div>
                  </div>
                )}
            </div>
            :
            <div  className='flex justify-center items-start w-[20em] h-auto mx-10 py-5'>
                {project.attachments && <img src={project.attachments} alt="Attachment" className='object-contain'/>}
            </div>}
{/* NAME */}
            <div className='w-[30rem] flex flex-col'>
                {isEdited ? 
                <div>
                  <input
                      className='text-area w-[100%]'
                      type='text'
                      value={project.name}
                      onChange={(e) => setProjects({...project, name:e.target.value})}
                    />
                </div>
                :
                <div className='text-xl'>
                     {project.name}
                </div> }

                  <div className='flex flex-row justify-between'> 
                    <div>
                        <label className='text-sm'>Status: </label> {project.status}
                    </div>
                    <div>
                      <label className='text-sm'>Goals: </label>{project.goals}
                    </div>
                  </div>
{/* DESCRIPTION */}
                {isEdited ? 
                <div className='text-lg pb-10 mb-10 min-w-[15em] grid grid-cols-1'>
                  <ReactQuill 
                        theme='snow'
                        value={project.description}
                        onChange={(value)=>setProjects({...project, description: (value)})}
                        placeholder='Project Description'
                        className='mt-5 h-[15em]'
                    />
                </div>
                :
                <div className='py-10 my-10 text-lg border-b-2 border-[#919191]'
                  dangerouslySetInnerHTML={{ __html: project.description}}>
                </div>}
                  <div className='flex flex-row justify-between text-sm' >
                    <div className=''>
                        Releases: {project.releases}
                    </div>
                    <div className=''>
                      Created: {new Date(project.created_at).toLocaleDateString()}
                    </div>
                </div>
                {isEdited ?
                <div>                   
                   <button className='bug-btn w-[100%]' onClick={handleEdit}>Save Changes</button>
                </div>
                :
                ''}
            </div>
        </div>
        </div>
}         
        </div>
{/* users */}
  <div className='flex flex-col justify-center items-center'>
  <div className='flex flex-col w-[500px] justify-start'>
    <label className='bg-[#5E5E5E]'>Assign users</label>
    <ul>
      {notConnectedUsers && notConnectedUsers.map((user,index)=>(
        <li 
          onClick={() => handleUserClick(user.id)}
          key={index}>
          {user.id}: {user.name} 
          {selectedIds.includes(user.id) && ' (Selected)'}
        </li>
      ))
    }
    </ul>
    <button onClick={send_users} className='bug-btn'>Add selected users</button>
  </div>

  <div className='flex flex-col justify-start mt-4 w-[500px]'>
    <label className='bg-[#5E5E5E]'>Users, working on this project:</label>
    <ul>  
      {users ? users.map((user, index) => (
        <li key={index} className='flex flex-row justify-between'>{user.id}: {user.name} 
          <img src="del.svg" className='w-[15px] opacity-40 hover:cursor-pointer hover:opacity-100 ease-in duration-100' 
          onClick={()=>dismiss_user(user.id)}/>
        </li>
      ))
      :
      <div>Loading users...</div>}
    </ul>
  </div>
</div>
        <div className='tickets pt-10'>
            <label className='ml-[1%] text-sm'>
                Project Tickets: 
            </label>
        <div className=''>
                {tickets && tickets.map((tick)=>(
                  <Link key={tick.id}  to={`/bugtrag/ticket/${tick.id}`}>
                    <div key={tick.id} className='ticket-container'>
                    <div className='flex flex-row justify-start items-center ml-1 mr-4 mt-2'>
                        <div
                          className={`p-1 rounded-md bg-[#919191] ${tick.status === 'Done' ? 'done': tick.status === 'In Progress' ? 'inprogress' : tick.status === 'Released' ? 'released' : tick.status === 'To do' ? 'todo' :''}`} >
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
                </div>
        </div>
    </div>
  )
}

export default BugProjectSingle
