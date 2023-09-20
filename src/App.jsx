import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
