import React from 'react';
import '../../css/Home.css'
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function TaskItem({ item, toggleComplete, deleteTask, taskEdit }) {
  return (
    <div className='body_da_pagina'>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none'   
 }}>
        <strong>{item.text}</strong>
      </span>
      <br />
      <div><blockquote>{item.description || "Sem descrição"}</blockquote></div> 
      <button onClick={() => taskEdit(item.id, item.text)}><MdModeEdit />Editar</button>
      <button onClick={() => deleteTask(item.id)}><FaTrashAlt />Excluir</button>
    </div>
  );
}

export default TaskItem;