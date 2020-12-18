
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TOGGLE_TASK_PROPERTY = 'TOGGLE_TASK_PROPERTY';

export const addTask = data => ({
    type: ADD_TASK,
    payload: {
        ...data,
        id: Math.floor(Math.random() * 1234)
    }
})

export const removeTask = id => ({
    type: REMOVE_TASK,
    payload: {
        id
    }
})

export const toggleProperty = (id, key) => ({
    type: TOGGLE_TASK_PROPERTY,
    payload: {
        id,
        key
    }
})