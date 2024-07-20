import React from 'react';

function TodoItem({ item, toggleComplete, deleteTodo, handleEdit }) {
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
      <button onClick={() => handleEdit(item.id, item.text)}>editar</button>
    </div>
  );
}

export default TodoItem;
