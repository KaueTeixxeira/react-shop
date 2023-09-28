import { useState, useEffect } from 'react'
import axios from '../service/AxiosConfig'
import MovieService from '../service/movie/MovieService'

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies= async () => {
    const movies = MovieService.getTopRatedMovies()
    
  }


  useEffect(() => {
    getTopRatedMovies()
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home