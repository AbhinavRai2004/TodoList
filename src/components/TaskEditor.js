// TaskEditor.js
import React, { useState, useEffect } from 'react';
import '../App.css';  

const TaskEditor = ({ onSave, existingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
    }
  }, [existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: existingTask ? existingTask.id : Date.now(), title, description };
    onSave(task);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-editor">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Task Title" 
        required 
        className="input"
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Task Description" 
        required 
        className="textarea"
      />
      <button type="submit" className="button">
        {existingTask ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TaskEditor;