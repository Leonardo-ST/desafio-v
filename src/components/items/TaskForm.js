import React, { useState } from 'react';
import '../../css/Home.css'

function TaskForm({ addTask }) {
    const [text, setText] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText('');
    };

    return (
        <form className='form-area' onSubmit={handleSubmit}>
            <input
                className='text_box'
                placeholder='Adicione uma tarefa'
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button type="submit">Adicionar</button>
            <br />
        </form>
    );
}

export default TaskForm;
