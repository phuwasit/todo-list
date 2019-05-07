import React, { createContext, useReducer, useEffect } from 'react'

import todoReducer from '../reduces/todoReducer'
import useLocalStorageState from '../hooks/useLocalStorageState'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  let defaultValues = [
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

  const [todos, setTodos] = useLocalStorageState('todos', defaultValues)
  const [state, dispatch] = useReducer(todoReducer, defaultValues, () => todos)
  useEffect(() => setTodos(state), [setTodos, state])

  return (
    <TodoContext.Provider value={{ state, dispatch }} >
      {children}
    </TodoContext.Provider >
  )
}