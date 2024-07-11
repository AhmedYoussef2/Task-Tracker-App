import { useState } from 'react';
import '../styles/TaskForm.css';
const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            addTask({ text: task });
            setTask('');
        }
    };

    return (
        <div className="TaskForm">
            <form className='space-x-6' action="" onSubmit={handleSubmit}>
                <input className='TaskTitle p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500' type="submit">Add</button>
            </form>

        </div>
    );
};

export default TaskForm;