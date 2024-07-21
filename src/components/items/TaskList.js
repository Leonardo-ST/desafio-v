import React from 'react';
import TodoItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask, taskEdit }) {
  return (
    <div>
      {tasks.map(task => (
        <TodoItem 
          key={task.id}
          item={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          taskEdit={taskEdit}
        />
      ))}
    </div>
  );
}

export default TaskList;
