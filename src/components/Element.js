import React from 'react';

import '../styles/Element.css'
const Element = ({ title, description, id, isFinished, isImportant, toggleProperty, removeTask }) => {


    const handleToggleImportant = () => {
        toggleProperty(id, 'isImportant');
    }

    const handleToogleFinished = () => {
        toggleProperty(id, 'isFinished')
    }

    const handleRemove = () => {
        removeTask(id);
    }



    return (
        <div className={isFinished ? 'element finished' : 'element'}>
            <h4 className={isImportant ? 'taskHeader important' : 'taskHeader'}>{title} {isImportant ? ' (!!!)' : ''}</h4>
            <p className='taskDescription'>{description}</p>

            <div className='actionBtns'>
                <button onClick={handleToogleFinished}>
                    {isFinished ? 'Restore' : 'Set as done'}
                </button>

                {!isFinished &&
                    <button onClick={handleToggleImportant}>
                        {isImportant ? 'Normal' : 'Important'}
                    </button>
                }
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    );
}

export default Element;