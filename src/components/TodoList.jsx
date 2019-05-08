import React, { useContext } from 'react'
import './TodoList.scss'
import { TodoContext } from '../contexts/TodoContext'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const { todos } = useContext(TodoContext)
  if (todos.length) {
    return (
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </div>
    )
  }
  return null
}

export default TodoList