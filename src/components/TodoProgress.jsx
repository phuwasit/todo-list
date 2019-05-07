import React, { useContext } from 'react'
import './TodoProgress.scss'
import { TodoContext } from '../contexts/TodoContext'

const TodoProgress = () => {
  const { state: todos } = useContext(TodoContext)
  const completed = todos.reduce((total, todo) => todo.completed ? total + 1 : total, 0)
  const percent = Math.ceil(completed / todos.length * 100)

  console.log(completed)

  return (
    <div className="todo-progress">
      <div className="todo-progress__bar" style={{ width: `${percent}%` }}></div>
      <div className="todo-progress__percent">{percent}%</div>
    </div>
  )
}

export default TodoProgress