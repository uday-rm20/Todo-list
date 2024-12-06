import { useState } from 'react';

function ToDoItem({ todo, index, toggleComplete, deleteTodo, editTodo }) {//props are being used in the child component
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button className='save-btn' onClick={handleEdit}>Save</button> {/* Event Handler for save button */}
        </div>
      ) : (
        <div className="task-content">
          <span className="task-number">{index}.</span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          <span
            className="task-text"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button> {/* Event Handler for edit button */}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button> {/* Event Handler for delete button */}
        </div>
      )}
    </li>
  );
}

export default ToDoItem;
