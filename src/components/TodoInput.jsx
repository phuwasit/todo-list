import React, { useContext } from 'react'

import { TodoContext } from '../contexts/TodoContext'
import useInputState from '../hooks/useInputState'

const TodoInput = () => {
  const { dispatch } = useContext(TodoContext);
  const [value, handleChange, reset] = useInputState("")

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: "ADD", title: value });
      reset()
    }
  }

  return (
    <input
      onKeyPress={handleEnterPress}
      className="input"
      value={value}
      onChange={handleChange}
      placeholder="Task..."
    />
  )
}

export default TodoInput