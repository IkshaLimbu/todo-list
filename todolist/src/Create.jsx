import React, { useState } from 'react'
import axios from 'axios'

function Create(){
    const [task, setTask] = useState('');

    const handleAdd = ()=>{
        axios.post('http://localhost:5000/add', { task })
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='create-form'>
            <input type='text' name="" id="Enter Task" onChange={(e) => setTask(e.target.value)} />
            <button type='button' onClick={handleAdd}> Add </button>
        </div>
    )
}

export default Create