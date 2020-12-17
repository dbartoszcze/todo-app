import React, { useState } from 'react';


import '../styles/AddTask.css'
const AddTask = ({ addTask }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isImportant, setIsImportant] = useState(false);

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'title':
                setTitle(e.target.value)
                return;
            case 'description':
                setDescription(e.target.value)
                return;
            case 'isImportant':
                setIsImportant(e.target.checked)
                return;
            default:
                console.warn('Wrong input name!')
                return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title) {
            addTask({title, description, isImportant});
        }
    }

    return (
        <div className='addTask'>
            <form onSubmit={handleSubmit}>

                <label>
                    Nazwa zadania:
                <input
                        type="text"
                        value={title}
                        onChange={handleChange}
                        name="title"
                        placeholder='Tytuł...'
                        required
                    />
                </label>
                <label>
                    Opis:
                <input
                        type="text"
                        value={description}
                        onChange={handleChange}
                        name="description"
                        placeholder='Opis..'
                    />
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={isImportant}
                        onChange={handleChange}
                        name="isImportant"
                    />
                    Czy ważne zadanie?

                </label>

                <button>Dodaj zadanie</button>
            </form>

        </div>
    );
}

export default AddTask;