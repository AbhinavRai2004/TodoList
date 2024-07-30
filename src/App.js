import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import TaskEditor from './components/TaskEditor';
import TaskList from './components/TaskList';
import './App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    fetch('/tasks.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched tasks:', data);
        setTasks(data);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const addTask = (task) => {
    const newTask = { 
      ...task, 
      id: tasks.length + 1, 
      completed: false, 
      timestamp: new Date().toISOString() 
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? { ...task, ...updatedTask, timestamp: new Date().toISOString() } : task));
    setTaskToEdit(null);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <p className="app-description">Add any to-do's that are on your list. Some examples are below.</p>
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
