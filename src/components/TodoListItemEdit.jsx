import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import useInputState from '../hooks/useInputState'
import * as types from '../constants/types'

const TodoListItem = ({ id, title, toggle }) => {
  const { dispatch } = useContext(TodoContext)
  const [value, handleChange, reset] = useInputState(title)

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: types.EDIT_TODO, id: id, newTitle: value })
      reset()
      toggle()
    }
  }

  return (
    <div className="todo-list-item">
      <div className="todo-list-item--title">
        <input className="input" value={value} onKeyPress={handleEnterPress} onChange={handleChange} />
      </div>
      <div className="todo-list-item__actions">
        <button className="button button--cancel" onClick={toggle}><i className="fa fa-times-circle"></i></button>
      </div>
    </div>
  )
}

export default TodoListItem