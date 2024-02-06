import React, { useEffect, useState, useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


const CreateTicket = () => {
    const [assignees, setAssignees] = useState([])
    const [projects, setProjects] = useState([])
    const [description, setDescription] = useState([])
    const [image, setImage] = useState(null)
    const [imageSrc, setImageSrc] = useState(null)
    const {user} = useAuth()
    const sumRef = useRef()
    const assigRef = useRef()
    const priorityRef = useRef()
    const projectRef = useRef()
    const navigate = useNavigate()


    const fetch_assignee = async() => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/assignee`);
            setAssignees(response.data)
        } catch (error) {
            console.error(error)
        }
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
    const send_data = async(e) => {
        e.preventDefault()
        // console.log(image)
        const payload = new FormData();
            payload.append('title', sumRef.current.value),
            payload.append('description', description);
            payload.append('assign', assigRef.current.value);
            payload.append('priority', priorityRef.current.value);
            payload.append('reporter', user.name);
            payload.append('status', 'To Do');
            payload.append('project_id', parseInt(projectRef.current.value));
            payload.append('image', image);
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/create_ticket`, payload);
            if (response.status === 200) {
                // console.log(response)
                navigate("/bugtrag")
            }
        }catch (e) {
            console.log(e.response.data.message);
        }
    }
    const handleImage = (e) => {
        const selectedImage = e.target.files[0];
        setImage(e.target.files[0]);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageSrc(reader.result);
        }; 
        if (selectedImage) {
            reader.readAsDataURL(selectedImage);
        }
    }


    useEffect(()=>{
        fetch_assignee()
        fetch_projects()
    },[sumRef])

  return (
    <div className='bug-main-container'>
    <div className='flex flex-col justify-between mx-[10%]'>
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
                <input ref={sumRef} required placeholder='Summary' className='text-area w-[95%]'></input>
            </div>
            <div className='flex justify-center my-[7px] pb-10 w-[95%]' >
                <ReactQuill 
                theme='snow'
                value={description}
                onChange={setDescription}
                placeholder='Description'
                className='w-[100%] max-h-[50vh]'
                />
            </div>
            <div className='my-5'>
            <label htmlFor="imageInput" className='bug-btn '>Attach Image</label>
                <input
                    type="file"
                    id="imageInput"
                    style={{display: 'none'}}
                    accept="image/*"
                    onChange={(e) => handleImage(e)}
                />
                {image && (
                    <div>
                        <p>Preview:</p>
                        <img src={imageSrc} alt='preview' className='w-[400px] h-auto'/>
                    </div>
                )}
            </div>
            <div className='flex flex-row justify-start mt-3'>
                <div className='w-[300px] '>
                    <label className='ml-[5px] text-sm '>Priority: </label>
                    <select ref={priorityRef} name='priority' id='priority' className='select'>
                        <option value='2'>High</option>
                        <option value='1'>Med</option>
                        <option value='0'>Low</option>
                    </select>
                </div>
                <div className='w-[300px] mr-[3%]'>
                    <label className='ml-[5px] text-sm'>Project: </label> 
                    <select ref={projectRef} onChange={fetch_projects} name='project' id='project' className='select'>
                        {projects && Object.keys(projects).map((key)=>(
                            <option key={key} value={projects[key].id}>{projects[key].name} </option>
                        ))}
                    </select> 
                </div>
            </div>
            <div>
                <span className='mt-5 flex flex-row justify-end mr-[5%]'>Reporter: {user && user.name}</span>
            </div> 
            </div>
            <button className='bug-btn w-[95%]' type='submit'>Submit</button>
        </form>
        </div>
        <div className='h-screen'>

        </div>
    </div>
  )
}

export default CreateTicket
