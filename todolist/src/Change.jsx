// // import React, { useState } from 'react'
// // import axios from 'axios'

// // function Change(){
// //     const [newName, setTask] = useState('');

// //     const handleChange = ()=>{
// //         axios.post('http://localhost:5000/change', { newName })
// //         .then(result => {
// //             location.reload()
// //         })
// //         .catch(err => console.log(err))
// //     }
// //     return (
// //         <div className='change-form'>
// //             <label>New task</label>
// //             <input type='text' name="" placeholder='Enter new task' id="New Task" onChange={(e) => setTask(e.target.value)} />
// //             <button type='button' onClick={handleChange}> Change </button>
// //         </div>
// //     )
// // }

// // export default Change

// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Change() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [task, setTask] = useState({ name: '' });

//   useEffect(() => {
//     axios.get(`http://localhost:5000/get/${id}`)
//       .then(result => setTask(result.data))
//       .catch(err => console.log(err));
//   }, [id]);

//   const handleChange = (e) => {
//     setTask({ ...task, name: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:5000/update/${id}`, task)
//       .then(() => navigate('/'))
//       .catch(err => console.log(err));
//   };

//   return (
//     <div>
//       <h2>Edit Task</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Task Name:
//           <input type="text" value={task.name} onChange={handleChange} />
//         </label>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// }

// export default Change;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Change() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState({ name: '' });

    useEffect(() => {
        axios.get(`http://localhost:5000/get/${id}`)
            .then(result => setTask(result.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        setTask({ ...task, name: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/change/${id}`, { newName: task.name })
            .then(() => navigate('/'))
            .catch(err => console.log(err));
    };

    return (
        <div className="change">
            <h2>Edit Task</h2>
            <form className="change-form" onSubmit={handleSubmit}>

                <input type="text" value={task.name} placeholder='new task name...' onChange={handleChange} />

                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Change;
