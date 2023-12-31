import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'

import Home from './pages/home/Home'
import Movie from './pages/movie/Movie'
import Search from './pages/search/Search'

import './App.css'
import { Container } from '@mui/system'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </BrowserRouter>

    </>
  )
}

export default App
