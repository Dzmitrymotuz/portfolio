import React, { useEffect, useState, useRef} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';


const CreateProject = () => {
    const [description, setDescription] = useState([])
    const [image, setImage] = useState()
    const [payloadImage, setPayloadImage] = useState()
    const [name, setName] = useState()
    const projectNameRef = useRef()
    const navigate = useNavigate()

    const handleImage = (e) => {
        const selectedImage = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
        setImage(reader.result);
        }; 
        if (selectedImage) {
        reader.readAsDataURL(selectedImage);
        }
    }

    const send_data = async(e) => {
        e.preventDefault()
        const payload = new FormData();
            payload.append('project_name', name),
            payload.append('description', description);
            payload.append('board_id', 0);
            payload.append('goals', 0);
            payload.append('releases', 0);
            payload.append('status', 'Open');
            payload.append('attachments', payloadImage);
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/projects/create`, payload);
            if (response.status === 200) {
                // console.log(response)
                navigate("/bugtrag")
            }
        }catch (e) {
            console.log(e.response.data.message);
        }
    }


    useEffect(()=>{
    },[])

  return (
    <div className='bug-main-container h-[100%]'>
    <div className='flex flex-col justify-between mx-[10%]'>
        <h3 className='flex justify-center'>Create new Project</h3>
        <form onSubmit={(e)=>send_data(e)}>
            <div className='flex flex-col'>
            <div>
                <input 
                ref={projectNameRef} 
                onChange={(e)=>setName(e.target.value)}
                required 
                placeholder='Project Title' 
                className='text-area w-[95%]'></input>
            </div>
            <div className='flex justify-center my-[7px] pb-10 w-[95%]' >
                <ReactQuill 
                theme='snow'
                value={description}
                onChange={setDescription}
                placeholder='Project Description'
                className='w-[100%] max-h-[50vh]'
                />
            </div>
            <div className='my-5'>
            <label htmlFor="imageInput" className='bug-btn rounded-md' >Choose Image:</label>
                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    style={{display: 'none'}}
                    onChange={(e) => {
                        handleImage(e);
                        setPayloadImage(e.target.files[0]);
                        }}
                />
                {image && (
                    <div>
                        <p>Preview:</p>
                        <img src={image} alt='preview' className='w-[100px] h-100[px]'/>
                    </div>
                )}
            </div>
            </div>
            <button className='bug-btn w-[95%]' type='submit'>Create</button>
        </form>
        </div>
    </div>
  )
}

export default CreateProject
