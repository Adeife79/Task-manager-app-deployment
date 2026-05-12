import React from 'react';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="task-item">
            <span
              className={task.completed ? 'completed' : ''}
              onClick={() => toggleTask(task._id)}
            >
              {task.title}
            </span>

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>
             </div>
        ))
      )}
    </div>
  );
}

export default TaskList;