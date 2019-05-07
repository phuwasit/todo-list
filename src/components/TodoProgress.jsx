import React, { useState } from 'react'

import './TodoProgress.scss'

const TodoProgress = () => {
  const progressValue = 80

  return (
    <div className="todo-progress">
      <div className="todo-progress__bar" style={{ width: `${progressValue}%` }}></div>
      <div className="todo-progress__percent">{progressValue}%</div>
    </div>
  )
}

export default TodoProgress