import React from 'react'

import { TodoProvider } from './contexts/TodoContext'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <div className="container">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  )
}

export default App;
