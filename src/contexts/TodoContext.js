import React, { createContext } from 'react'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const store = {
    todos: [
      {
        id: 1,
        text: "Touch myself."
      },
      {
        id: 2,
        text: "Sleep peacefully"
      }
    ]
  }
  return (
    <TodoContext.Provider value={store}>
      {children}
    </TodoContext.Provider>
  )
}