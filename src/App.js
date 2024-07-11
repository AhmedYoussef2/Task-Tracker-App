import './App.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), complete: false }]);
    }

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const toggleComplete = (id) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, complete: !task.complete } : task)));
    }

    return (
        <div className='App drop-shadow-md'>
            <h1>TASCULUS</h1>
            <TaskForm addTask={addTask} />
            <TaskList
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
            />
        </div>);
};

export default App;
