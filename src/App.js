/* These lines of code are importing various modules and components needed for the `App` component in a
React application: */

import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import todoImg from './images/todo.png';
import TaskEditor from './components/TaskEditor';
import TaskList from './components/TaskList';
import './App.css';
import initialTasks from './utils/tasks';

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

 // add tasks logic.
  const addTask = (task) => {
    const newTask = {
      ...task,
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1, 
      completed: false,
      timestamp: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  // update task function
  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? { ...task, ...updatedTask, timestamp: new Date().toISOString() } : task));
    setTaskToEdit(null);
  };

  // toggle task completion function.
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // search functionality.  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // filter tasks based on the search term. 
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Task Manager</h1>
      <div className='imgContainer'>
        <img className="todoImg" src={todoImg} alt="todoImg"/>
        <figcaption className="app-description">Add any to-do's that are on your list</figcaption>
      </div>
      <div className="search-bar">
        <FontAwesomeIcon className="search-icn" icon={faMagnifyingGlass} />
        <input 
          type="text" 
          placeholder="Search tasks..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="searchBox"
        />
      </div>
      <TaskEditor onSave={taskToEdit ? updateTask : addTask} existingTask={taskToEdit} />
      <TaskList tasks={filteredTasks} onUpdate={setTaskToEdit} onToggle={toggleTaskCompletion} />
    </div>
  );
};

export default App;
