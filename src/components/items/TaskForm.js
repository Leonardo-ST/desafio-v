import React, { useState } from 'react';
import '../../css/Home.css';

function TaskForm({ addTask }) {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('')
    const [showInput, setShowInput] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!text.trim()) return;
        addTask(text, description);
        setText('');
        setDescription('');
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
                    <input
                        className='text_box'
                        placeholder='Descrição da tarefa'
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button type="submit">Adicionar</button>
                </>
            ) : (
                <div>
                    <button className='botao_mais_home' onClick={() => setShowInput(true)}>+</button>
                    <br />
                    <p><strong>Obs:</strong> Para adicionar uma nova tarefa clique em '+'.</p>
                </div>
            )}
            <br />
        </form>
    );
}

export default TaskForm;