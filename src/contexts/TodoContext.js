import React, { createContext, useReducer } from 'react'

import todoReducer from '../reduces/todoReducer'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  let defaultValues = [
    {
      id: 1,
      title: "Touch myself.",
      completed: true
    },
    {
      id: 2,
      title: "Sleep peacefully",
      completed: false
    }
  ]

  const [state, dispatch] = useReducer(todoReducer, defaultValues)

  return (
    <TodoContext.Provider value={{ state, dispatch }} >
      {children}
    </TodoContext.Provider >
  )
}