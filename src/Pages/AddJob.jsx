import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill'
const AddJob = () => {

    const [title,setTitle] = useState('')
    const [location,setLocation] = useState('Banglore')
    const [category,setCategory] = useState('Programming')

    const [level,setLevel] = useState('Beginner level')
    const [salary,setSalary] = useState(0)
    
    const editorRef = useRef(null)
    const quillRef = useRef(null)

    useEffect(()=>{
        // initiate Quill only once

        if(!quillRef.current && editorRef.current){
            quillRef.current = new Quill(editorRef.current,{
                theme:'snow'
            })
        }
    },[])


  return (
    <form>

        <div>
            <p>Job Title</p>
            <input type="text" value={title} placeholder='Type here' onChange={e=>setTitle(e.target.value)} required/>
              
        </div>

        <div>
            <p>Job Description</p>
            <div ref={editorRef}>

            </div>
              
        </div>

        <div>
            <div>
                <p>Job Category</p>
                <select onChange={e=>setCategory(e.target.value)}></select>
            </div>
        </div>
    </form>
  )
}

export default AddJob