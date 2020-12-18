import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../redux/actions/appActions'

import '../styles/AddTask.css'
const AddTask = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isImportant, setIsImportant] = useState(false);
    const dispatch = useDispatch();


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
            dispatch(addTask({ title, description, isImportant }));

            resetInputs();
        }
    }

    const resetInputs = () => {
        setTitle('');
        setDescription('')
        setIsImportant('')
    }

    return (
        <div className='addTask'>
            <form onSubmit={handleSubmit} className='taskForm'>

                <label className='inputLabel'>
                    Task title:
                <input
                        className='textInput'
                        type="text"
                        value={title}
                        onChange={handleChange}
                        name="title"
                        placeholder='Title...'
                        required
                    />
                </label>
                <label className="inputLabel" >
                    Description:
                <input
                        className='textInput'
                        type="text"
                        value={description}
                        onChange={handleChange}
                        name="description"
                        placeholder='Description..'
                    />
                </label>

                <label className='inputLabel'>
                    Important task?
                    <input
                        type="checkbox"
                        checked={isImportant}
                        onChange={handleChange}
                        name="isImportant"
                    />


                </label>

                <div className='formBtns'>
                    <button className='addBtn'>Add task</button>
                </div>
            </form>

        </div>
    );
}

export default AddTask;