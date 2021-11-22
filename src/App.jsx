import { useState, useEffect } from 'react'
import './App.css'
import ModuleRoutes from './components/routing/routes/ModuleRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <ModuleRoutes />
      </div>
    </Router>
  )
}

export default App
