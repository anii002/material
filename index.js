// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/todoList', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// // Create Todo schema
// const todoSchema = new mongoose.Schema({
//     task: { type: String, required: true },
//     completed: { type: Boolean, default: false },
// });

// const Todo = mongoose.model('Todo', todoSchema);

// // Middleware
// app.use(bodyParser.json());

// // Routes
// // Create Todo
// app.post('/todos', async (req, res) => {
//     try {
//         const todo = new Todo(req.body);
//         await todo.save();
//         res.status(201).json(todo);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Read Todos
// app.get('/todos', async (req, res) => {
//     try {
//         const todos = await Todo.find();
//         res.json(todos);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Update Todo
// app.patch('/todos/:id', async (req, res) => {
//     try {
//         const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(todo);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Delete Todo
// app.delete('/todos/:id', async (req, res) => {
//     try {
//         const todo = await Todo.findByIdAndDelete(req.params.id);
//         res.json(todo);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
