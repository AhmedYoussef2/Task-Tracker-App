import { useState } from 'react';
import '../styles/Task.css';

const Task = ({ task, updateTask, deleteTask, toggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    const handleEditSave = () => {
        updateTask({ ...task, text: editText });
        setIsEditing(false);
    };

    return (
        <div className="Task p-6 rounded flex space-x-4 items-center hover:border-4 border-x-fuchsia-500">
            <li className={task.complete ? 'complete' : ''}>
                <div className='IsEditInputDiv'>
                    {isEditing ? (<input className='border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-center' type="text" value={editText} onChange={handleEditChange} />) : (<p className={task.complete ? 'line-through Input2 ' : 'Input2'}>{task.text}</p>)}
                </div>
                <div className='flex space-x-4 items-center'>
                    <input type="checkbox" className="form-checkbox h-5 w-5" checked={task.complete} onChange={() => toggleComplete(task.id)} />
                    {isEditing ? (<input className='IsEditInput border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500' type="text" value={editText} onChange={handleEditChange} />) : (<p className={task.complete ? 'line-through Input ' : 'Input'}>{task.text}</p>)}
                    {isEditing ? (<button className='border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-2xl hover:bg-blue-500 hover:text-white' onClick={handleEditSave}>Save</button>) : (<button className='border-2 border-green-500 text-green-500 px-4 py-2 rounded-2xl hover:bg-green-500 hover:text-white' onClick={() => setIsEditing(true)}>Update</button>)}
                    <button className='border-2 border-red-500 text-red-500 px-4 py-2 rounded-2xl hover:bg-red-500 hover:text-white' onClick={() => deleteTask(task.id)}> Delete </button>
                </div>
            </li>
        </div>
    );
};

export default Task;
