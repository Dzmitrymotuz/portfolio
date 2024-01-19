import React, {useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Search = ( { onSearchResults}) => {
    const searchRef = useRef()
    const [query, setQuery] = useState()


    const search = async(e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/api/bugtrag/tickets_search`, {
                params : {query: query}
            })
            onSearchResults(response.data.tickets)
        }catch(e){
            console.log(e.data)
        }
    }       




  return (
    <div className='border-0'>
        <form onSubmit={(e)=>search(e)}>
            <input 
            placeholder='Search'
            onChange={(e)=>setQuery(e.target.value)}
            className='text-area border-none' 
            />
            <button type='submit' className='bug-btn'>Search</button>
        </form>
    </div>
  )
}

export default Search
