import React from 'react';


import Element from './Element'

import '../styles/TaskList.css'
const TaskList = ({ tasks, toggleTask, removeTask }) => {
    const taskList = tasks.map(task =>
        <Element
            key={task.id}
            toggleTask={toggleTask}
            removeTask={removeTask}
            {...task}
        />
    )
    return (
        <div className="taskList">
            <h2>Lista zadań:</h2>
            <div>
                {taskList}
            </div>
        </div>
    );
}

export default TaskList;