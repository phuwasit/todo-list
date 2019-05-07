import React, { useContext } from 'react'
import './TodoList.scss'
import { TodoContext } from '../contexts/TodoContext'

const TodoListItem = ({ id, title, completed }) => {
  const { dispatch } = useContext(TodoContext)

  return (
    <div className="todo-list__item">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => { }}
        />
        <label html-for="checkbox" onClick={() => dispatch({ type: "TOGGLE", id: id })}></label>
      </div>
      <div className="todo-list__item--title" style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </div>
    </div>
  )
}

export default TodoListItem