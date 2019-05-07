import React from 'react'

import useInputState from '../hooks/useInputState'

const TodoInput = () => {
  const [value, handleChange, reset] = useInputState("")

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      reset()
    }
  }

  return (
    <input
      onKeyPress={handleEnterPress}
      className="input"
      value={value}
      onChange={handleChange}
    />
  )
}

export default TodoInput