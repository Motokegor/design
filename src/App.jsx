import './App.scss'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import data from './Card.json'
import {Cards, Create, Info} from './pages'
import { useState } from 'react'


function App() {
  const [arr, setArr] = useState(data)

  return (
    <Router>
      <header>
        <nav>
        <NavLink to="/cards">Cards</NavLink>
          <NavLink to="/">Info</NavLink>
          <NavLink to="/create">Create</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={arr.map((item, index) => (
        <Info object={item} key={index} />
      ))}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path="/create" element={<Create arr={arr} setArr={setArr}/>}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App