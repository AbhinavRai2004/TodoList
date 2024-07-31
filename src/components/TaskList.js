import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; 


const TaskList = ({ tasks, onUpdate, onToggle }) => {
  const [expandedTask, setExpandedTask] = useState(null);

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-item-header">
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggle(task.id)} 
                className="checkbox"
              />
              <span className={`task-title ${task.completed ? 'completed' : ''}`}>{task.title}</span>
              <button 
                onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                className="expand-button"
              >
                {expandedTask === task.id ? <FontAwesomeIcon className="up-arrow" icon={faAngleUp} /> : <FontAwesomeIcon className="down-arrow" icon={faAngleDown} />}
              </button>
            </div>
            {expandedTask === task.id && (
              <div className="task-details">
                <p>{task.description}</p>
                <p className="timestamp">Last updated: {new Date(task.timestamp).toLocaleString()}</p>
                <button 
                  onClick={() => onUpdate(task)} 
                  className="edit-button"
                >
                  <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
