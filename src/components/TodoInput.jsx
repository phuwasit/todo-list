import React from 'react'

const TodoInput = () => {
  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
    }
  }

  return (
    <input
      onKeyPress={handleEnterPress}
      className="input"
      value={''}
      onChange={() => { }}
    />
  )
}


export default TodoInput