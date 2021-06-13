import './App.css'

import React from 'react'
import TodoList from './components/todo/TodoList'

const App = () => {
  return (
    <main className='todo-app'>
      <TodoList />
    </main>
  )
}

export default App