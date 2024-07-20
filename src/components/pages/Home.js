import React, { useState, useEffect } from 'react';
import TodoList from '../items/TodoList';
import TodoForm from '../items/TodoForm';
import '../../css/Home.css';

function Home() {

    const [todos, setTodos] = useState([]);

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

    return (
        <div className='body_da_pagina'>
            <div className='centro'>
                <div className='centro_quadro'>
                    <h3>oi</h3>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                </div>
            </div>
        </div>
    );
}

export default Home;

//Arquivo principal da todo-list