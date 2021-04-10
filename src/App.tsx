import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Books from './Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>Books</p>
        <Books />
      </header>
    </div>
  )
}

export default App
