import React, { useState, useEffect } from 'react';
import '../App.css';  

/**
 * TaskEditor component to handle adding and editing tasks.
 * 
 * @param {Function} onSave - Function to handle saving the task.
 * @param {Object} existingTask - The task to be edited (if any).
 */
const TaskEditor = ({ onSave, existingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Load existing task details into the state when the component mounts or when the existing task changes
  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
    }
  }, [existingTask]);

  /**
   * Handles the form submission, saving the task and resetting the form fields.
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: existingTask ? existingTask.id : Date.now(), title, description };
    // Save the task
    onSave(task);  
    setTitle('');  // Reset title field
    setDescription('');  // Reset description field
  };

  return (
    <form onSubmit={handleSubmit} className="task-editor">
      {/* Input box for task title */}

      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Task Title" 
        required 
        className="input"
      />
      {/* Textarea box for task description */}
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Task Description" 
        required 
        className="textarea"
      />
      {/* Submit button, changes text based on whether editing or adding a task */}
      <button type="submit" className="button">
        {existingTask ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TaskEditor;
