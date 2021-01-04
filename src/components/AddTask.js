import React from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../redux/actions/appActions'
import useFormState from '../hooks/useFormState'
import '../styles/AddTask.css'
const AddTask = () => {
    const { title, description, isImportant, handleChange, resetInputs } = useFormState();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title) {
            dispatch(addTask({ title, description, isImportant }));
            resetInputs();
        }
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