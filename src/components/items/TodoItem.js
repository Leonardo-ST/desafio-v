import React from 'react';

function TodoItem({ item, toggleComplete, deleteTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.text}
      </span>
      <button onClick={() => deleteTodo(item.id)}>excluir</button>
    </div>
  );
}

export default TodoItem;
