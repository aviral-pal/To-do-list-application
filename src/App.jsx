import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-10 px-4">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-10 transition-all duration-300">
        <Header />
        <div className="mt-6">
          <ToDoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
