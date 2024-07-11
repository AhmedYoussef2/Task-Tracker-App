import Task from './Task';
import '../styles/TaskList.css';
const TaskList = ({ tasks, updateTask, deleteTask, toggleComplete }) => {
    return (
        <div className="TaskList">
            <ul className=''>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                        toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;