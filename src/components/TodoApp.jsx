import React from 'react'

import './TodoApp.scss'

import TodoInput from './TodoInput'
import TodoProgress from './TodoProgress'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'


const TodoApp = () => {
  return (
    <div className="todo-app">
      <div className="todo-app__header">
        <h1 className="todo-app__header--title">To Do List</h1>
      </div>
      <TodoInput />
      <TodoProgress />
      <TodoList />
      <TodoFilters />
    </div>
  )
}

export default TodoApp