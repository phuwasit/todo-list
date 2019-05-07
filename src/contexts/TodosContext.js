import React, { createContext, useReducer, useEffect } from 'react'

import * as types from '../constants/types'
import todosReducer from '../reduces/todos'
import visibilityFilterReducer from '../reduces/visibilityFilter'

import useLocalStorageState from '../hooks/useLocalStorageState'

export const TodosContext = createContext()

export const TodosProvider = ({ children }) => {
  let initialTodos = [
    {
      id: 1,
      title: "Create todo list app",
      completed: true
    },
    {
      id: 2,
      title: "Learn react hooks",
      completed: false
    }
  ]

  const [todos, setTodos] = useLocalStorageState('todos', initialTodos)
  const [todosState, dispatch] = useReducer(todosReducer, initialTodos, () => todos)
  const [filterState] = useReducer(visibilityFilterReducer, types.visibilityFilters.SHOW_ALL)

  useEffect(() => setTodos(todosState), [setTodos, todosState])

  return (
    <TodosContext.Provider value={{ todos: todosState, filter: filterState, dispatch }} >
      {children}
    </TodosContext.Provider >
  )
}