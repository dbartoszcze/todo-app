import React from 'react';

import '../styles/Element.css'
const Element = ({ title, description, id, isImportant, toggleTask, removeTask }) => {


    const handleToggle = () => {
        toggleTask(id);
    }

    const handleRemove = () => {
        removeTask(id);
    }

    return (
        <div className={isImportant ? 'element important' : 'element'}>
            <h3 className='taskHeader'>{title}</h3>
            <p className='taskDescription'>{description}</p>

            <div className='actionBtns'>
                <button onClick={handleToggle}>{isImportant ? 'Zmień na zwykły' : 'Zmień na ważny'}</button>
                <button onClick={handleRemove}>Usuń</button>
            </div>
        </div>
    );
}

export default Element;