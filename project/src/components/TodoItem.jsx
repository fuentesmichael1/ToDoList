import React from 'react'

function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
        />
        {todo.text}
        <button onClick={() => onRemove(todo.id)}>Remove</button>
        </li>
    )
}

export default TodoItem
