import React, { useContext } from 'react'

import { TodosContext } from '../contexts/TodosContext'
import useInputState from '../hooks/useInputState'
import * as types from '../constants/types'

const TodoInput = () => {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState("")

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: types.ADD_TODO, title: value });
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