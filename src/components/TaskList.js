import React, { Fragment } from 'react';
import Task from './Task';
const TaskList = props => {
    let active = props.tasks.filter(task => task.active)

    active.sort((a, b) => {
        console.log({ a })
        console.log({ b })
        a = a.text.toLowerCase()
        b = b.text.toLowerCase()

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })

    let done = props.tasks.filter(task => !task.active)
    done.sort((a, b) => {
        if (a.finishDate < b.finishDate) {
            return 1
        } else if (a.finishDate > b.finishDate) {
            return -1;
        }
        return 0
    })

    const activeTasks = active.map(task => (
        <Task delete={props.delete} change={props.change} key={task.id} task={task} />
    ))

    const finishedTasks = done.map(task => (
        <Task delete={props.delete} change={props.change} key={task.id} task={task} />
    ))



    return (
        <Fragment>
            <div className="active">
                <h2>
                    Zadania do zrobienia
            </h2>
                {activeTasks.length > 0 ? activeTasks : 'brak zadań'}
            </div>
            <hr />
            <div className="done">
                <h3>
                    Zadania zrobione({finishedTasks.length})
            </h3>
                {finishedTasks.length > 3 && <span className="smallText">wyświetlonych jest jedynie 5 ostatnich elementów</span>}
                {finishedTasks.slice(0, 3)}
            </div>
        </Fragment>
    )
}



export default TaskList