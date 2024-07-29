import React, { useState, useEffect } from 'react';
import TaskList from '../items/TaskList';
import TaskForm from '../items/TaskForm';
import '../../css/Home.css';
import bloquinho from './../../images/bloquinho.png';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({ id: null, text: '', description: '' });

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    const addTask = (text, description) => {
        const newTask = { id: Date.now(), text, description, completed: false };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const toggleComplete = id => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const editTask = (id, newText, newDescription) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, text: newText, description: newDescription } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const taskEdit = (id, text, description) => {
        setCurrentTask({ id, text, description });
        setIsEditing(true);
    };

    const taskSave = () => {
        if (currentTask.text && currentTask.description) {
            editTask(currentTask.id, currentTask.text, currentTask.description);
            setIsEditing(false);
        }
    };

    return (
        <div>
            <div className='centro'>
                <div className='centro_quadro'>
                    <img src={bloquinho} alt="Bloquinho de notas" className='bloquinho_home' />
                    <h3>Lista de tarefas</h3>
                    <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} taskEdit={taskEdit} />
                    <TaskForm addTask={addTask} />
                </div>
            </div>

            {isEditing && (
                <div className="editar-alert">
                    <div className="editar-alert-content">
                        <h2>Editar Tarefa</h2>
                        <p class="info">Nome da Tarefa:</p>
                        <input
                            type="text"
                            value={currentTask.text}
                            onChange={(e) => setCurrentTask({ ...currentTask, text: e.target.value })}
                        />
                        <p class="info">Descrição da Tarefa:</p>

                        <input
                            type="text"                            
                            value={currentTask.description}
                            onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
                        />
                        <button onClick={taskSave}>Salvar</button>
                        <button onClick={() => setIsEditing(false)}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
