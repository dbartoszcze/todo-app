import React from 'react';


import Element from './Element'

import '../styles/TaskList.css'
const TaskList = ({ tasks }) => {
    const taskList = tasks.map(task =>
        <Element
            key={task.id}
            {...task}
        />
    )
    return (
        <div className="taskList">
            Lista tasków:
            <div>
                {taskList}
            </div>
        </div>
    );
}

export default TaskList;