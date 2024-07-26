const express = require('express');
const cors = require('cors');
const db = require('./models')
const Todo = db.Todo;

const app = express();
app.use(cors());
app.use(express.json());



//for adding the task
app.post('/add', (req, res) => {
    const task = req.body.task;
    Todo.create({
        name: task
    })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

//for fetching the data
app.get('/get', (req, res) => {
    Todo.findAll()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})


//to update the completed task
app.put('/update/:id', async(req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const todo = await Todo.findByPk(id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    // Perform the update
    await todo.update({ done: 1 });

    // Send the updated todo as response
    res.json(todo);

})

//to edit the completed task
// app.put('/change/:id', async(req, res) => {
//     const { id } = req.params;
//     const new_name = req.body.newName;
//     console.log(req.params)
//     const todo = await Todo.findByPk(id);

//     if (!todo) {
//         return res.status(404).json({ error: 'Todo not found' });
//     }

//     // Perform the update
//     await todo.update({ name: new_name });

//     // Send the updated todo as response
//     res.json(todo);
// })

//to edit task name
app.put('/change/:id', async (req, res) => {
    const { id } = req.params;
    const new_name = req.body.newName; 
    console.log(req.params);
    const todo = await Todo.findByPk(id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    // Perform the update
    await todo.update({ name: new_name });

    // Send the updated todo as response
    res.json(todo);
});



//to delete any task
app.delete('/delete/:id', async(req, res)=>{
    const {id} = req.params;
    const todo = await Todo.findByPk(id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    
    await todo.destroy();

    
    res.json(todo);
} )
// app.listen(3300, ()=>{
//     console.log('Server running on port' , 3300);
// })


db.sequelize.sync()
    .then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port", 5000);
        });
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });