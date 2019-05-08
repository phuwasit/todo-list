import React, { useContext } from 'react'
import './TodoProgress.scss'
import { TodoContext } from '../contexts/TodoContext'

const TodoProgress = () => {
  const { todos } = useContext(TodoContext)
  let percent = 0

  if (todos.length > 0) {
    const completed = todos.reduce((total, todo) => todo.completed ? total + 1 : total, 0)
    percent = Math.ceil(completed / todos.length * 100)
  }

  return (
    <div className="todo-progress">
      <div className="todo-progress__bar" style={{ width: `${percent}%` }}></div>
      <div className="todo-progress__percent">{percent}%</div>
    </div>
  )
}

export default TodoProgress