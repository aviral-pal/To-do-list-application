import React, { useState } from 'react';

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    if (editedText.trim()) {
      editTodo(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 rounded shadow">
      {/* ✅ Toggle Complete */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {!isEditing ? (
          <span className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.text}
          </span>
        ) : (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="border p-1 rounded"
          />
        )}
      </div>

      {/* ✏️ Edit | 💾 Save | 🗑 Delete */}
      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-600 hover:underline">
            💾
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-600 hover:underline">
            ✏️
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="text-red-600 hover:underline">
          🗑️
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
