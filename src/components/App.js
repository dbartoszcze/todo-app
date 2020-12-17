import React, { useState } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import '../styles/App.css'

const App = () => {

    const [tasks, setTasks] = useState([]);

    const handleAddTask = ({ title, description, isImportant }) => {
        const task = {
            title,
            description,
            isImportant,
            id: Math.floor(Math.random() * 1234)
        }

        setTasks(prev => [...prev, task])
    }

    const handleToogleProperty = (id, property) => {
        setTasks(prevTasks => prevTasks.filter(task => {
            if (task.id === id) {
                task[property] = !task[property]
            }
            return task;
        }))
    }


    const handleRemoveTask = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    return (
        <div className='app'>
            <AddTask addTask={handleAddTask} />
            {  tasks.length > 0 &&
                <TaskList
                    toggleProperty={handleToogleProperty}
                    removeTask={handleRemoveTask}
                    tasks={tasks}
                />}
        </div>
    );
}

export default App;