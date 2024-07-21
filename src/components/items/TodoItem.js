import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

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
      <button onClick={() => deleteTodo(item.id)}><FaTrashAlt />excluir</button>
      <button onClick={() => handleEdit(item.id, item.text)}><MdModeEdit />editar</button>
    </div>
  );
}

export default TodoItem;
