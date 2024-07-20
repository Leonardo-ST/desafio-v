import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, deleteTodo, handleEdit }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          item={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
