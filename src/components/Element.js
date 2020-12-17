import React from 'react';

import '../styles/Element.css'
const Element = ({ title, description, id, isImportant, toggleTask }) => {


    const handleToggle = () => {
        toggleTask(id);
    }

    return (
        <div className={isImportant ? 'element important' : 'element'}>
            <h3 className='taskHeader'>{title}</h3>
            <p className='taskDescription'>{description}</p>

            <div className='actionBtns'>
                <button onClick={handleToggle}>{isImportant ? 'Zmień na zwykły' : 'Zmień na ważny'}</button>
                <button>Usuń</button>
            </div>
        </div>
    );
}

export default Element;