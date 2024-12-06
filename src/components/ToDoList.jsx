import { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, addTodo, toggleComplete, deleteTodo, editTodo }) { // props are being used in the child component
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAdd}>Add</button> {/* Event Handler for add button */}
      </div>
      <ul className="task-list">
        {todos.map((todo, index) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            index={index + 1} 
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
