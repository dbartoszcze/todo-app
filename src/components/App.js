import React from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

import '../styles/App.css'

const App = () => {
    return (
        <div className='app'>
            <AddTask />
            <TaskList />
        </div>
    );
}

export default App;