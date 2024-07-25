import React, { useState } from 'react';
import '../../css/Home.css';

function TaskForm({ addTask }) {
    const [text, setText] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text);
        setText('');
        setShowInput(false);
    };

    return (
        <form className='form-area' onSubmit={handleSubmit}>
            {showInput ? (
                <>
                    <input
                        className='text_box'
                        placeholder='Adicione uma tarefa'
                        type="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button type="submit">Adicionar</button>
                </>
            ) : (
                <button className='botao_mais_home' onClick={() => setShowInput(true)}>+</button>
            )}
            <br />
        </form>
    );
}

export default TaskForm;