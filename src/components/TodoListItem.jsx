import React, { useContext } from 'react'
import './TodoList.scss'
import { TodoContext } from '../contexts/TodoContext'
import useToggleState from '../hooks/useToggleState'
import TodoListItemEdit from './TodoListItemEdit'

const TodoListItem = ({ id, title, completed }) => {
  const { dispatch } = useContext(TodoContext)
  const [isEditing, toggle] = useToggleState(false)


  return (
    isEditing ?
      <TodoListItemEdit id={id} title={title} toggle={toggle} />
      :
      <div className="todo-list-item">
        <div className="checkbox">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => { }}
          />
          <label html-for="checkbox" onClick={() => dispatch({ type: "TOGGLE", id: id })}></label>
        </div>
        <div className="todo-list-item--title" style={{ textDecoration: completed ? "line-through" : "none" }}>
          {title}
        </div>
        <div className="todo-list-item__actions">
          <button className="button" onClick={toggle}><i className="fa fa-edit"></i></button>
          <button className="button" onClick={() => dispatch({ type: "REMOVE", id: id })}><i className="fa fa-trash-alt"></i></button>
        </div>
      </div>
  )
}

export default TodoListItem