import React, { useContext } from 'react'

import './TodoList.scss'

import { TodoContext } from '../contexts/TodoContext'

const TodoList = () => {
  const store = useContext(TodoContext)
  if (store.todos.length) {
    return (
      <div className="todo-list">
        <ul className="todo-list__list">
          {store.todos.map((todo) => (
            <li className="todo-list__item" key={todo.id}>
              <div className="checkbox">
                <input type="checkbox" />
                <label html-for="checkbox"></label>
              </div>
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return null
}

export default TodoList