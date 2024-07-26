// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Create from './Create';
// import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill, BsPencil } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';


// function Home() {
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5000/get')
//             .then(result => setTodos(result.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleEdit = (id) => {
//         axios.put('http://localhost:5000/update/' + id)
//             .then(result => {
//                 location.reload()
//             })
//             .catch(err => console.log(err));
//     }

//     const handleDelete = (id) => {
//         axios.delete('http://localhost:5000/delete/' + id)
//             .then(result => {
//                 location.reload()
//             })
//             .catch(err => console.log(err));
//     }
//     const handleChange = (id) => {
//         useNavigate(`/change/${id}`);
//     }

//     return (
//         <div className="home">
//             <h2>Todo List</h2>
//             <Create setTodos={setTodos} />
//             {
//                 todos.length === 0
//                     ?
//                     <div>
//                         <h2>No records till now</h2>
//                     </div>
//                     :
//                     todos.map((todo, index) => (

//                         <div className="task" key={index}>
//                             <div className="checkbox" onClick={() => handleEdit(todo.id)}>
//                                 {todo.done ?
//                                     <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
//                                     : <BsCircleFill className='icon' />
//                                 }
//                             </div>
//                             <div >
//                                 <p className={todo.done ? "line_through" : ""} >{todo.name}</p>
//                             </div>
//                             <div>
//                                 <span><BsPencil className='icon' onClick={() => handleChange(todo.id)} /> </span>
//                                 <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo.id)} /> </span>
//                             </div>
//                         </div>

//                     ))
//             }
//         </div>
//     );
// }

// export default Home;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Create from './Create';
// import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill, BsPencil } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//     const [todos, setTodos] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get('http://localhost:5000/get')
//             .then(result => setTodos(result.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleEdit = (id) => {
//         axios.put('http://localhost:5000/update/' + id)
//             .then(result => {
//                 location.reload()
//             })
//             .catch(err => console.log(err));
//     }

//     const handleDelete = (id) => {
//         axios.delete('http://localhost:5000/delete/' + id)
//             .then(result => {
//                 location.reload()
//             })
//             .catch(err => console.log(err));
//     }

//     const handleChange = (id) => {
//         navigate(`/change/${id}`);
//     }

//     return (
//         <div className="home">
//             <h2>Todo List</h2>
//             <Create setTodos={setTodos} />
//             {
//                 todos.length === 0
//                     ?
//                     <div>
//                         <h2>No records till now</h2>
//                     </div>
//                     :
//                     todos.map((todo, index) => (

//                         <div className="task" key={index}>
//                             <div className="checkbox" onClick={() => handleEdit(todo.id)}>
//                                 {todo.done ?
//                                     <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
//                                     : <BsCircleFill className='icon' />
//                                 }
//                             </div>
//                             <div >
//                                 <p className={todo.done ? "line_through" : ""} >{todo.name}</p>
//                             </div>
//                             <div>
//                                 <span><BsPencil className='icon' onClick={() => handleChange(todo.id)} /> </span>
//                                 <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo.id)} /> </span>
//                             </div>
//                         </div>

//                     ))
//             }
//         </div>
//     );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Create from './Create';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill, BsPencil } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleEdit = (id) => {
        axios.put('http://localhost:5000/update/' + id)
            .then(result => {
                location.reload();
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/delete/' + id)
            .then(result => {
                location.reload();
            })
            .catch(err => console.log(err));
    };

    const handleChange = (id) => {
        navigate(`/change/${id}`);
    };

    return (
        <div className="home">
            <h2>Todo List</h2>
            <Create setTodos={setTodos} />
            {
                todos.length === 0
                    ?
                    <div>
                        <h2>No records till now</h2>
                    </div>
                    :
                    todos.map((todo, index) => (
                        <div className="task" key={index}>
                            <div className="checkbox" onClick={() => handleEdit(todo.id)}>
                                {todo.done ?
                                    <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                                    : <BsCircleFill className='icon' />
                                }
                            </div>
                            <div >
                                <p className={todo.done ? "line_through" : ""} >{todo.name}</p>
                            </div>
                            <div>
                                <span><BsPencil className='icon' onClick={() => handleChange(todo.id)} /> </span>
                                <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo.id)} /> </span>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}

export default Home;
