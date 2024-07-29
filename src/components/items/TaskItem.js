import React from 'react';
import '../../css/Home.css'
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function TaskItem({ item, toggleComplete, deleteTask, taskEdit }) {
  return (
    <div className='section'>
      <div class="todo">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
      />
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none'   
 }}>
        <strong>{item.text}</strong>
      </span>
      </div>
      <br />
      <div><blockquote>{item.description || "Sem descrição"}</blockquote></div> 
      <div>
        <button onClick={() => taskEdit(item.id, item.text)} className='btn-secondary'><MdModeEdit />Editar</button>
        <button onClick={() => deleteTask(item.id)} className='btn-remove'><FaTrashAlt />Excluir</button>
      </div>
    </div>
  );
}

export default TaskItem;