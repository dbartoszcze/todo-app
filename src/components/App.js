import React from 'react';
import { Provider } from 'react-redux';

import AddTask from './AddTask';
import TaskList from './TaskList';

import '../styles/App.css'

import store from '../redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <div className='app'>
                <AddTask />
                <TaskList />
            </div>
        </Provider>
    );
}

export default App;