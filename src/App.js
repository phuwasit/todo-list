import React from 'react'

import { TodosProvider } from './contexts/TodosContext'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <div className="container">
      <TodosProvider>
        <TodoApp />
      </TodosProvider>
    </div>
  )
}

export default App;
