import { useState, useEffect } from 'react'
import MovieService from '../service/movie/MovieService'
import MoviesCarousel from '../components/movie-carousel/MoviesCarousel'
import MovieCard from '../components/movie-card/MovieCard'
import Data from '../top-movies.json'

const Home = () => {
  const [topMovies, setTopMovies] = useState([])
  const [popular, setPopular] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])

  const getTopRatedMovies= async () => {
    const movies = await MovieService.getTopRatedMovies()
    console.log(JSON.stringify(movies.results))
    // setTopMovies(movies.results)
  }

  useEffect(() => {
    // getTopRatedMovies()
    // console.log(Data)
    setTopMovies(Data.top_movies)
    setPopular(Data.popular)
    setUpcoming(Data.upcoming)
    setNowPlaying(Data.now_playing)
  }, [])


 

  return (
    <>
     <MoviesCarousel></MoviesCarousel>

     {topMovies.length > 0 && <MovieCard movie={topMovies[0]}></MovieCard>}
    </>
  )
}

export default Home