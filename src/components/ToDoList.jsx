import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, addTodo, deleteTodo, toggleComplete, editTodo }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      addTodo(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      {/* Form to Add Task */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>

      {/* Render Tasks */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
