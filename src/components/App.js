import React, { useState } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import '../styles/App.css'

const App = () => {

    const [tasks, setTasks] = useState([{
        id: 123,
        title: 'Task1',
        description: 'Desc1',
        isImportant: true
    },
    {
        id: 124,
        title: 'Task2',
        description: 'Desc2',
        isImportant: false
    }]);

    const handleAddTask = ({ title, description, isImportant }) => {
        const task = {
            title,
            description,
            isImportant,
            id: Math.floor(Math.random() * 1234)
        }

        setTasks(prev => [...prev, task])
    }

    const handleToogleImportant = (id) => {
        setTasks(prevTasks => prevTasks.filter(task => {
            if (task.id === id) {
                task.isImportant = !task.isImportant
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
                    toggleTask={handleToogleImportant}
                    removeTask={handleRemoveTask}
                    tasks={tasks}
                />}
        </div>
    );
}

export default App;