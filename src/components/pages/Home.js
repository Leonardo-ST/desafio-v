import React, { useState, useEffect } from 'react';
import TodoList from '../items/TodoList';
import TodoForm from '../items/TodoForm';
import '../../css/Home.css';

function Home() {
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({ id: null, text: '' });

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    const addTodo = text => {
        const newTodo = { id: Date.now(), text, completed: false };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const deleteTodo = id => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const editTodo = (id, newText) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleEdit = (id, text) => {
        setCurrentTodo({ id, text });
        setIsEditing(true);
    };

    const handleSave = () => {
        if (currentTodo.text) {
            editTodo(currentTodo.id, currentTodo.text);
            setIsEditing(false);
        }
    };

    return (
        <div className='body_da_pagina'>
            <div className='centro'>
                <div className='centro_quadro'>
                    <h3>Lista de tarefas</h3>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} handleEdit={handleEdit} />
                </div>
            </div>

            {isEditing && (
                <div className="editar-alert">
                    <div className="editar-alert-content">
                        <h2>Editar Tarefa</h2>
                        <input
                            type="text"
                            value={currentTodo.text}
                            onChange={(e) => setCurrentTodo({ ...currentTodo, text: e.target.value })}
                        />
                        <button onClick={handleSave}>salvar</button>
                        <button onClick={() => setIsEditing(false)}>cancelar</button>
                    </div>
                </div>
            )}

            
        </div>
    );
}

export default Home;
