import React, { useContext } from 'react'
import './TodoList.scss'
import { TodosContext } from '../contexts/TodosContext'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const { todos } = useContext(TodosContext)
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