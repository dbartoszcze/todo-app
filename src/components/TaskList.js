import React from 'react';


import Element from './Element'

import '../styles/TaskList.css'
const TaskList = ({ tasks, toggleProperty, removeTask }) => {
    const taskList = tasks.map(task =>
        <Element
            key={task.id}
            toggleProperty={toggleProperty}
            removeTask={removeTask}
            {...task}
        />
    )
    return (
        <div className="taskList">
            <h2>List of tasks:</h2>
            <div>
                {taskList}
            </div>
        </div>
    );
}

export default TaskList;