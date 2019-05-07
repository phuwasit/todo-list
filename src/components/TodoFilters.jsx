import React from 'react'

const TodoFilters = () => {
  return (
    <div className="todo-filters">
      <button className="todo-filters__button--all">All</button>
      <button className="todo-filters__button--active">Active</button>
      <button className="todo-filters__button--completed">Completed</button>
    </div>
  )
}

export default TodoFilters