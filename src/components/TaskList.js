import React from 'react';


import Element from './Element'

import '../styles/TaskList.css'
import { useSelector } from 'react-redux';
const TaskList = () => {

    const tasks = useSelector(store => store.tasks)

    const taskList = tasks.map(task =>
        <Element
            key={task.id}
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