import React from 'react';

const Task = props => {
    const { text, date, id, active, important, finishDate } = props.task
    return (
        <div>
            <p>
                <strong className={important ? 'importantTask' : ''}>{text}</strong> - do <span>{date} </span>
                {active && <button onClick={() => props.change(id)}>Zostało zrobione</button>}
                {!active && <span>Zostało zrealizowane {new Date(finishDate).toLocaleString()}</span>}
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </div>
    )
}

export default Task;